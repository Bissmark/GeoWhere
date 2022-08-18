import React from "react";
import { Link } from "react-router-dom";

function Home() {
    

    return (

      <div className="flex justify-center flex-col my-10 text-center">
        <h1 className='text-yellow-500 text-2xl'>Welcome to GeoWhere?</h1>
        <p className='text-yellow-500'>Click below to start playing =)</p>
        <br />
        <Link className="mt-5 bg-yellow-400 hover:bg-orange-700 active:animate-ping text-slate font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="/PlayTrip">Play</Link>
      </div>
    );
  }
  
  
  
  export default Home;