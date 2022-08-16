import { useState, useEffect } from 'react';
import supabase from "../supabaseClient";

function App() {
     const [email, setEmail] = useState('');
     const [session, setSession] = useState(null);  
    
  
    useEffect(() => {
      setSession(supabase.auth.session())
  
        supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
  
    const handleLogin = async () => {
        const { error } = await supabase.auth.signIn({ email });
        console.log(error);
    }
  
  
    function handleEmail(e) {
      setEmail(e.target.value);
    }
  
    const handleLogout = async () => {
      await supabase.auth.signOut();
    }
  
    console.log(session);
  
    return (
  
      <div className="App">
        <div>
          {session? (
              <>
              <button onClick={handleLogout}>Logout</button>
              </>
          ) : (
            <>
            <input type="email" value={ email } onChange={ handleEmail }></input>
            <button onClick={handleLogin}>Login</button>    
            </>
          )}
        </div>  
      </div>
    );
  }
  
  
  
  export default App;