const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/register', (req, res) => {
  const { name, room_number, phone_number, parent_contact } = req.body;
  const sql = 'INSERT INTO students (name, room_number, phone_number, parent_contact) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, room_number, phone_number, parent_contact], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Student registered successfully' });
  });
});

module.exports = router;
