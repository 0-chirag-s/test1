import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HRAssistant from './pages/HRAssistant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assistant" element={<HRAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;