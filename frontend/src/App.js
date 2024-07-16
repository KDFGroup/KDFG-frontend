

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import NavBar from './components/navBar.js/navbar';  
import Footer from './components/Footer/Footer';
import TrendingNow from './pages/Trendingnow';
import Community from './pages/Community';
import EpisodeRecap from './pages/EpisodeRecaps';
import AboutUs from './pages/AboutUs';
import HighestRated from './pages/HighestRated';
import Home from './pages/Home';
import './index.css';
import EmailVerification from './pages/EmailVerification';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div id="main-content" className="flex-grow">
          <Routes>
            {/* Redirect to Home when the app first opens or refreshes */}
            <Route path="/" element={<Navigate to="/Home" replace />} />
            {/* Define your routes */}
            <Route path="/Home" element={<Home />} />
            <Route path="/Trendingnow" element={<TrendingNow />} />
            <Route path="/EpisodeRecaps" element={<EpisodeRecap />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/HighestRated" element={<HighestRated />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
