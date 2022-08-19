import React from "react";
import { Link } from "react-router-dom";
import HomeBackground from './../taclan-world.gif';

function Home() {
    return (
      <div className="flex justify-center flex-col my-10 text-center">
        <div className="mb-7">
        <h1 className='title text-yellow-500'>Welcome to GeoWhere?</h1>
        <p className='text-yellow-500'>Click below to start playing</p>
        </div>
        <img src={HomeBackground} alt="Picture of Globe"></img>
        <Link className="mt-5 bg-yellow-400 hover:bg-orange-700 active:animate-ping text-slate text-3xl font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline" to="/PlayTrip">Play</Link>
      <div className="tutorial">
        <h1 className='text-yellow-500 text-3xl'>How to play</h1>
        <p className='text-yellow-500'>The game mode consists of five rounds, each showing a different street view location.
        </p>
        <br />
        <p className="text-yellow-500">The player scores more points depending on how close to the actual photo location they guess.</p>
      </div>
      </div>
    );
  }

  export default Home;