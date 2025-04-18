import React, { useState } from 'react';
import axios from 'axios';
import './StudentRegistrationForm.css';

const StudentRegistrationForm = () => {
  const [student, setStudent] = useState({
    name: '', room_number: '', phone_number: '', parent_contact: ''
  });

  const handleChange = e => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/students/register', student);
    alert('Student registered.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="room_number" placeholder="Room Number" onChange={handleChange} required />
      <input name="phone_number" placeholder="Phone Number" onChange={handleChange} required />
      <input name="parent_contact" placeholder="Parent Contact" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentRegistrationForm;
