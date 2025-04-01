import './App.css';
import React from 'react';
import Home from './components/home'
import About from './components/about'
import { Route, Routes, Navigate, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <h3>React Router App</h3> 
      <nav>
          <Link to="/home">Home</Link>&nbsp;
          <Link to="/about">About</Link><br/>
        </nav>
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
