import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Generics/Navbar';
import data from './data/dummyData';
import Footer from './components/Generics/Footer';

function App() {
  const [filteredFruits, setFilteredFruits] = useState(data);

  return(
    <Router>
      <Navbar setFilteredFruits={setFilteredFruits} />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home filteredFruits={filteredFruits} />} />
        </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
