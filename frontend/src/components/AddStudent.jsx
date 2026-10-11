import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    department: '',
    email: '',
    cgpa: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students', formData);
      alert('Student added successfully!');
      navigate('/students');
    } catch (err) {
      console.log('Error saving student:', err);
      alert('Failed to save student record');
    }
  };

  return (
    <div className="box-panel">
      <h2 style={{ marginTop: 0 }}>Add New Student</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            name="rollNo"
            placeholder="e.g. CS202"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            placeholder="e.g. Computer Science"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>CGPA:</label>
          <input
            type="number"
            step="0.01"
            name="cgpa"
            placeholder="e.g. 8.2"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '10px', marginTop: '10px', fontSize: '14px' }}
        >
          Save Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;