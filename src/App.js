import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Kalender from './Pages/Islamic/Kalender';
import Tes from './Pages/Tes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kalender" element={<Kalender />} />
        <Route path="/tes" element={<Tes />} />
      </Routes>
    </Router>
  );
}

export default App;
