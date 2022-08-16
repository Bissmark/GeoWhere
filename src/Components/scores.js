import { useState, useEffect } from 'react';
import supabase from "../supabaseClient";


function App() {
    const [scores, setScores] = useState([]);
  
    
    useEffect(() => {
      fetchScore()
    }, []);
  
  
    function handleScore(e) {
      setScores(e.target.onClick);
    }
  
    async function fetchScore() {
      let { data } = await supabase
      .from('scores')
      .select('*')
      setScores(data)
      console.log("Scores: ", data);
    }
    
    return (
  
      <div className="App">
        
      </div>
    );
  }
  
  