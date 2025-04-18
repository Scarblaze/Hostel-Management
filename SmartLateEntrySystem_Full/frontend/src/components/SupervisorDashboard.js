import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SupervisorDashboard.css';

const SupervisorDashboard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/entries/pending');
        setEntries(res.data);
      } catch (error) {
        console.error('Error fetching pending entries:', error);
      }
    };
    fetchEntries();
  }, []);

  const handleDecision = async (id, decision) => {
    try {
      console.log('Sending decision:', decision, 'for entry ID:', id);
  
      await axios.post(
        `http://localhost:5000/api/entries/review/${id}`, // <-- backticks added here
        { decision },
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      alert(`Entry ${decision}`); // <-- backticks added here too
  
      // Refresh list
      setEntries(prev => prev.filter(entry => entry.id !== id));
    } catch (err) {
      console.error('Decision error:', err.response?.data || err.message);
      alert('Error occurred while submitting decision.');
    }
  };
  

  return (
    <div>
      <h2>Pending Late Entries</h2>
      {entries.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No pending entries.</p>
      ) : (
        entries.map(entry => (
          <div key={entry.id} className="entry-card">
            <p><strong>Student ID:</strong> {entry.student_id}</p>
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Time:</strong> {entry.actual_entry_time}</p>
            <p><strong>Reason:</strong> {entry.reason}</p>
            <button onClick={() => handleDecision(entry.id, 'approve')}>Approve</button>
            <button onClick={() => handleDecision(entry.id, 'reject')}>Reject</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SupervisorDashboard;