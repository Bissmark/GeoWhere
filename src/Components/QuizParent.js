import CountdownTimer from "./CountdownTimer/CountdownTimer";
import Quiz from "./Quiz";
import { useEffect, useState } from 'react';
import supabase from "../supabaseClient";

function QuizParent () {
    const [currentQuiz, setCurrentQuiz] = useState('');
    async function fetchRandomQuiz(){

        let {data} = await supabase
        .from('New Quizes')
        .select('*')
        const randomIndex = Math.floor(Math.random() * data.length);
        // const futureQuizes = currentQuiz.filter((q) => Date.parse(q.timer) > Date.now());
    }

    useEffect(() => {
        // const timerID = setInterval(() => {
        // const randomIndex = currentQuiz.filter((q) => Date.parse(q.timer) > Date.now());
        // setCurrentQuiz(randomIndex);
        // },10000000);
        // return () => clearInterval(timerID);
        fetchRandomQuiz();
        // setcurrentQuiz();
    }, []);
    return(
        <div>
            <h1>Quiz Parent coming soon</h1>
        </div>
    );
}
export default QuizParent;

