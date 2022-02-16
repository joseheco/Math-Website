import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import RenderCal from './pages/Cal'
import Quote from './pages/Quotes'
import './App.css';

const App = () => (
  <div id="back">
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<RenderCal />} />
        <Route path="/quote" element={< Quote />} />
    </Routes>
  </div>
);

export default App;
