import React, { useState } from 'react';
import axios from 'axios';
import './LateEntryForm.css';

const LateEntryForm = () => {
  const [form, setForm] = useState({
    studentId: '', date: '', entryTime: '', reason: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/entries/log', form);
    alert('Late entry submitted.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="studentId" placeholder="Student ID" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <input name="entryTime" type="time" onChange={handleChange} required />
      <textarea name="reason" placeholder="Reason" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LateEntryForm;
