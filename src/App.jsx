import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'; // Import your CSS file
import Home from './components/pages/Home'
import SignupPage from './components/pages/SignupPage'

function App () {
  return ( 
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element=
        {<Home />} />
        { <Route path="/sign-up" element={<SignupPage />}/> }
      </Routes>
    </Router>
  );
};

export default App;
