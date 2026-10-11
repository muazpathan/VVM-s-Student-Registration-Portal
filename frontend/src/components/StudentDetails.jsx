import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error getting student details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '30px' }}>Loading profile...</p>;
  if (!student) return <p style={{ textAlign: 'center', marginTop: '30px' }}>Student not found.</p>;

  return (
    <div className="box-panel">
      <h2 style={{ margin: '0 0 6px 0' }}>{student.name}</h2>
      <span className="badge">{student.rollNo}</span>

      <div style={{ marginTop: '14px' }}>
        <div className="detail-row">
          <span>Department</span>
          <strong>{student.department}</strong>
        </div>
        <div className="detail-row">
          <span>Email</span>
          <strong>{student.email}</strong>
        </div>
        <div className="detail-row">
          <span>CGPA</span>
          <strong>{student.cgpa}</strong>
        </div>
        <div className="detail-row">
          <span>Registered Date</span>
          <strong>{new Date(student.createdAt).toLocaleDateString()}</strong>
        </div>
      </div>

      <div style={{ marginTop: '18px', display: 'flex', gap: '10px' }}>
        <Link to={`/edit/${student.id}`} className="btn btn-edit" style={{ flex: 1 }}>
          Edit Info
        </Link>
        <Link to="/students" className="btn btn-light" style={{ flex: 1 }}>
          ← Back
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;