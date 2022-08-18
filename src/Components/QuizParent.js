import CountdownTimer from "./CountdownTimer/CountdownTimer";
import Quiz from "./Quiz";
import { useEffect, useState } from 'react';
import supabase from "../supabaseClient";

function QuizParent () {
    const [currentQuiz, setCurrentQuiz] = useState('');


    async function fetchRandomQuiz(){
<<<<<<< HEAD
      let {data: quizes}  = await supabase
      .from('New Quizes')
      .select('*')
=======
        let {data: quizes}  = await supabase
          .from('New Quizes')
          .select('*')
>>>>>>> 41cff9f505185069bfb518b19e012ae33b9a7386

        let {data} = await supabase
          .from('New Quizes')
          .select('*')

        const randomIndex = Math.floor(Math.random() * data.length);
        if (data[randomIndex]) {
            setCurrentQuiz(data[randomIndex].content);
        }
    }
    async function eraseSubmission () {
      let { data: quizes } = await supabase
<<<<<<< HEAD
      .from('New Quizes')
      .select('*')
=======
        .from('New Quizes')
        .select('*')
>>>>>>> 41cff9f505185069bfb518b19e012ae33b9a7386
      const quizIDs = quizes.map((quiz) => {
        return (quiz.id);
      });

      quizIDs.forEach( async (ID) => {
        const { data, error } = await supabase
          .from('New Quizes')
          .delete()
          .match({id: ID});
      });
    }
    

    useEffect(() => {
        eraseSubmission();
        fetchRandomQuiz();

        
      }, []);

        // setcurrentQuiz();


    return(
        <div>
            <h2>{ currentQuiz }</h2>
            <Quiz />
            <CountdownTimer countdownTimestampMs={1628454873000}/>
            <CountdownTimer eraseSubmission={ eraseSubmission } fetchRandomQuiz={ fetchRandomQuiz } />

        </div>
    );
}
export default QuizParent;

