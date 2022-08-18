import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from './utlis/CountdownTimerUtils';
import QuizParent from "../QuizParent";
import supabase from "../../supabaseClient";


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '24',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
        // conditional goes here that triggers prop methods when timer hits ZERO
        const { seconds, minutes, hours, days } = remainingTime;

        if (seconds + minutes + hours + days <= 0) {
            setRemainingTime(defaultRemainingTime);
            eraseSubmission();
            fetchRandomQuiz();
        }
        
    }

    return(
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>hours</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>minutes</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    );
}

export default CountdownTimer;