import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './JustificationForm.css';

const JustificationForm = () => {
  const { entryId } = useParams();
  const [form, setForm] = useState({ reason: '', document: null });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = e => setForm({ ...form, document: e.target.files[0] });

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('reason', form.reason);
    if (form.document) data.append('document', form.document);
    await axios.post(`http://localhost:5000/api/entries/justify/${entryId}`, data);
    alert('Justification submitted.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="reason" placeholder="Justification" onChange={handleChange}></textarea>
      <input type="file" name="document" onChange={handleFile} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JustificationForm;
