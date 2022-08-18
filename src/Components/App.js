import React from 'react';
import PlayTrip from './PlayTrip';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Map";
import { useState, useEffect } from 'react'
import supabase from '../supabaseClient'
import Auth from './Auth'
import Account from './Account'
import QuizForm from './Quizform';
import QuizParent from './QuizParent';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import Home from './Home';
import Navbar from './NavBar';


export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <BrowserRouter>
      <Navbar/>
    <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="PlayTrip" element={<PlayTrip />} />
          <Route path="CorrectMap" element={<Map />} /> 
          <Route path="Quizform" element={<QuizForm />} />
          <Route path="Quiz" element={<QuizParent />} />
          <Route path="Countdowntimer" element={<CountdownTimer countdownTimestampMs={1628454873000} />} />
          <Route path="Account" element={!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )} />
      </Routes>

      </div>
      </BrowserRouter>
  );
}
