import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import LateEntryForm from './components/LateEntryForm';
import JustificationForm from './components/JustificationForm';
import SupervisorDashboard from './components/SupervisorDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<StudentRegistrationForm />} />
        <Route path="/late-entry" element={<LateEntryForm />} />
        <Route path="/justification/:entryId" element={<JustificationForm />} />
        <Route path="/dashboard" element={<SupervisorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
