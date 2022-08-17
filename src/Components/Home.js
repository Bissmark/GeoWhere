import { useState, useEffect } from 'react';
import supabase from "../supabaseClient";

function Home() {
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

      <div className="login">
        <h1>Welcome to GoogleWhere?</h1>
        <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            {session? (
                <>
                <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
              <>
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Sign in here to play
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Email' type="email" value={ email } onChange={ handleEmail }></input>
              <br />
              <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogin}>Login</button>    
              </>
            )}
          </div>  
        </form>
        <p className="text-center text-gray-500 text-xs">When you submit, you'll receive an email confirmation so no need for a password.</p>
        </div>
      </div>
    );
  }
  
  
  
  export default Home;