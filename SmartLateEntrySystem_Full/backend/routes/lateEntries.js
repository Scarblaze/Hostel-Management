const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Log late entry
router.post('/log', (req, res) => {
  const { studentId, date, entryTime, reason } = req.body;
  const status = entryTime > '22:30:00' ? 'pending' : 'approved';

  const sql = 'INSERT INTO late_entries (student_id, date, actual_entry_time, reason, entry_status) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [studentId, date, entryTime, reason, status], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Late entry logged', status });
  });
});

// Get all pending entries
router.get('/pending', (req, res) => {
  db.query('SELECT * FROM late_entries WHERE entry_status = "pending"', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Approve or Reject a late entry
router.post('/review/:id', (req, res) => {
  const { decision } = req.body;
  const { id } = req.params;

  console.log('Incoming review:', { id, decision });

  const sql = 'UPDATE late_entries SET entry_status = ? WHERE id = ?';
  db.query(sql, [decision, id], (err, result) => {
    if (err) {
      console.error('❌ DB error:', err);
      return res.status(500).json({ error: err });
    }
    res.json({ message: `Entry ${decision}` });
  });
});

module.exports = router;
