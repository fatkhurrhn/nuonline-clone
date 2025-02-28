import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RamadhanPlanner from './Pages/RamadhanPlanner';
import Kalender from './Pages/Islamic/Kalender';

import Kal from './components/Kal';  // ✅ Pastikan sudah diimpor

import Tes from './Pages/Tes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ramadhan-planner" element={<RamadhanPlanner />} />
        <Route path="/kalender" element={<Kalender />} />

        <Route path="/kal" element={<Kal />} />  {/* ✅ Gunakan jika ada rute untuk Kal */}

        <Route path="/tes" element={<Tes />} />
      </Routes>
    </Router>
  );
}

export default App;
