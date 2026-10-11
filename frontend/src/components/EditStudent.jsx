import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    department: '',
    email: '',
    cgpa: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then((res) => {
        setFormData({
          name: res.data.name,
          rollNo: res.data.rollNo,
          department: res.data.department,
          email: res.data.email,
          cgpa: res.data.cgpa
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error loading student:', err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, formData);
      alert('Student updated successfully!');
      navigate('/students');
    } catch (err) {
      console.log('Error updating student:', err);
      alert('Failed to update student');
    }
  };

  if (loading) return <p style={{ textAlign: 'center', marginTop: '30px' }}>Loading form...</p>;

  return (
    <div className="box-panel">
      <h2 style={{ marginTop: 0 }}>Update Student Info</h2>

      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
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
            value={formData.cgpa}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ flex: 1, padding: '10px' }}
          >
            Save Changes
          </button>
          <Link
            to="/students"
            className="btn btn-light"
            style={{ flex: 1, padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;