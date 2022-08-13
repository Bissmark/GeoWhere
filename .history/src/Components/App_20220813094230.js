import { useState, useEffect } from 'react'
import { supabase } from './client'

function App() {
  const [scores, setScores] = useState([])

  async function fetchScors() {
    const { data } = await supabase

    useEffect(() => {
      fetchScors()
    }, []);
    .from('scores')
    .select()
    setScores(data)
    console.log("Scores: ", data);
  }
  return (
    <div className="App">
      <h1>GeoWhere coming soon</h1>
    </div>
  );
}

export default App;
