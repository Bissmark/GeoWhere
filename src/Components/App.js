import React from 'react';
import Layout from "./Layout";
import PlayTrip from './PlayTrip';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Map";
import { useState, useEffect } from 'react'
import supabase from '../supabaseClient'
import Auth from './Auth'
import Account from './Account'
import QuizForm from './Quizform';
import Quiz from './Quiz';


export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container">
       <BrowserRouter>
       <Routes>
           <Route path="/" element={<Layout />} />
           <Route path="PlayTrip" element={<PlayTrip />} />
           <Route path="CorrectMap" element={<Map />} /> 
           <Route path="Quizform" element={<QuizForm />} />
           <Route path="Quiz" element={<Quiz />} />
           <Route path="LogIn" element={!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

      
   