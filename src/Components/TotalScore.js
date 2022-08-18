import React from "react";
import supabase from "../supabaseClient";
import { useState, useEffect } from "react";


function TotalScore() {
  const [totalScores, setTotalScores] = useState([]);
  const [scores, setScores] = useState('');

  useEffect(() => {
    fetchTotalScore();
  }, []);

  async function fetchTotalScore() {
    let { data: totalScores } = await supabase
      .from('totalScores')
      .select('*')

      setTotalScores(totalScores);
  }
  function _incrementCount(e) {
    setScores(e.target.click);
  }

  async function handleSubmit() {
    //totalScore scores to supabase
    await supabase.from('totalScores').insert({ scores });
    setScores('');
    fetchTotalScore();
  }
 
  return (
    <div >
      
      { totalScores.map(totalScore => (
        <div key={totalScore.id}>{ totalScore.scores }</div>
      ))}
      <div>
        <input type="button" value={ scores } onChange={ _incrementCount } />
        <button onClick={ handleSubmit }></button>
      </div>
    </div>
  );
}

export default TotalScore;


// function TotalScore({ totalScore }) {
//     return (
//         <div className="totalScore">Total Score: { totalScore }</div>
//     );
// }

// export default TotalScore;