import React from "react";
import supabase from "../supabaseClient";
import { useState, useEffect } from "react";


function Quiz(props) {
  const [quizes, setQuizes] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchQuiz();
  }, []);

  async function fetchQuiz() {
    let { data: quizes } = await supabase
      .from('quizes')
      .select('*')

      setQuizes(quizes);
  }
  function handleContent(e) {
    setContent(e.target.value);
  }

  async function handleSubmit() {
    //quiz content to supabase
    await supabase.from('quizes').insert({ content });
    setContent('');
    fetchQuiz('');
  }
 
  return (
    <div >
      <h1>Welcome! </h1>
      <div>
        <input type="text" value={ content } onChange={ handleContent } />
        <button onClick={ handleSubmit }>Create Quiz</button>
      </div>

      { quizes.map(quiz => (
        <div key={quiz.id}>{ quiz.content }</div>
      ))}
      
    </div>
  );
}

export default Quiz;
