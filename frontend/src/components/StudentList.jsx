import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentCard from './StudentCard';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch students list
  const loadStudents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/students');
      setStudents(res.data);
      setLoading(false);
    } catch (err) {
      console.log('Error loading students:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // delete student record
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      setStudents(students.filter((s) => s.id !== id));
    } catch (err) {
      console.log('Error deleting student:', err);
      alert('Failed to delete student');
    }
  };

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px', color: '#ffffff' }}>Loading records...</p>;
  }

  return (
    <div className="records-page-wrapper">
      <div className="container" style={{ margin: '0 auto', maxWidth: '1000px' }}>
        
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div className="records-header">
            <h2>Student Records</h2>
            <p>Check, view profile, update, or remove students.</p>
          </div>
          <span className="records-count-badge">
            Count: {students.length}
          </span>
        </div>

        {/* Student Cards Grid */}
        {students.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(255, 255, 255, 0.85)', borderRadius: '12px' }}>
            <p style={{ margin: 0, color: '#475569' }}>No students found in the database.</p>
          </div>
        ) : (
          <div className="card-grid">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} onDelete={handleDelete} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default StudentList;