import Streetview from "./Streetview";
import Map from "./Map";
import { useState, useEffect } from 'react';
import supabase from "../supabaseClient";


function App() {
  const [scores, setScores] = useState([]);
  const [email, setEmail] = useState('');
  const [session, setSession] = useState(null);
  
  
  useEffect(() => {
    fetchScore()
  }, []);

  useEffect(() => {
    setSession(supabase.auth.session())

      supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const handleLogin = async (email) => {
      const { error } = await supabase.auth.signIn({ email });
      console.log(error);
  }

  function handleScore(e) {
    setScores(e.target.onClick);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  
  const handleLogout = async () => {
    await supabase.auth.logout();
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
      <div>
        {session? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
          <input type="email" value={ email } onChange={ handleEmail }></input>
          <button onClick={handleLogin}>Login</button>    
          </>
        )}
      </div>
      <Streetview />
      <Map />
    </div>
  );
}
 
 


export default App;