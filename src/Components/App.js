import React from 'react';
import Layout from "./Layout";
import PlayTrip from './PlayTrip';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Map from "./Map";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PlayTrip" element={<PlayTrip />} />
          <Route path="correctMap" element={<Map />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}