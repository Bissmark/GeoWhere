import Streetview from "./Streetview";
import Map from "./Map";
import { useState, useEffect } from 'react';
import supabase from "../supabaseClient";

function App() {
  const [scores, setScores] = useState([]);
  
  
  useEffect(() => {
    fetchScore()
  }, []);

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  async function fetchScore() {
    let { data } = await supabase
    .from('scores')
    .select('*')
    setScores(data)
    console.log("Scores: ", data);
  }
 
  return (
    <div className="App">
      <Streetview />
      <Map />
    </div>
  );
}

export default App;