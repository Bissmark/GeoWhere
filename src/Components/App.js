<<<<<<< HEAD
import Streetview from "./Streetview";
import Map from "./Map";
=======
import { useState, useEffect } from 'react'
import { supabase } from './client'
>>>>>>> fe61ac65d3466564c133d90fa328ffe08101a4a6

function App() {
  const [scores, setScores] = useState([])
  
  
  useEffect(() => {
    fetchScors()
  }, []);

  async function fetchScors() {
    const { data } = await supabase
    .from('scores')
    .select()
    setScores(data)
    console.log("Scores: ", data);
  }
 
  return (
    <div className="App">
<<<<<<< HEAD
      <Streetview />
      <Map />
=======
      <h1>GeoWhere coming soon</h1>
      
>>>>>>> fe61ac65d3466564c133d90fa328ffe08101a4a6
    </div>
  );
}

export default App;