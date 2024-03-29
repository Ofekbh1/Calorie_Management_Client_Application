import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; 
import './App.css';

function App() {
  const selectedDate = new Date();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage selectedDate={selectedDate} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
