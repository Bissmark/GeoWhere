import React from 'react';
import Layout from "./Layout";
import PlayTrip from './PlayTrip';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Map";
import { useState, useEffect } from 'react'
import supabase from '../supabaseClient'
import Auth from './Auth'
import Account from './Account'
import CorrectMap from './CorrectMap';
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
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="PlayTrip" element={<PlayTrip />} />
            <Route path="map" element={<Map />} />
            <Route path="Account" element={!session ? <Auth /> : <Account key={session.user.id} session={session} />} />
          </Routes>
        </div> 
    </BrowserRouter>
  );
}
