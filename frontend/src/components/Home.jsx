import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [totalStudents, setTotalStudents] = useState(0);
  const [avgCgpa, setAvgCgpa] = useState('0.00');

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then((res) => {
        const data = res.data;
        setTotalStudents(data.length);
        if (data.length > 0) {
          const total = data.reduce((sum, s) => sum + Number(s.cgpa || 0), 0);
          setAvgCgpa((total / data.length).toFixed(2));
        }
      })
      .catch((err) => console.log('Error fetching stats:', err));
  }, []);

  return (
    <div className="home-hero-section">
      <div className="hero-content">
        
        {/* Crisp Translucent Glass Hero Card */}
        <div className="hero-text-card">
          <h1>Welcome to the Student Portal</h1>
          <p>
            An integrated academic management system to keep track of student enrollments,
            departments, and performance records with real-time updates.
          </p>
          <div className="hero-actions">
            <Link to="/students" className="btn btn-primary">Check All Students</Link>
            <Link to="/add" className="btn btn-light">+ Add New Student</Link>
          </div>
        </div>

        {/* Clear readable stat cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <span>Total Enrolled</span>
            <h3>{totalStudents}</h3>
          </div>
          <div className="stat-card">
            <span>Average CGPA</span>
            <h3>{avgCgpa}</h3>
          </div>
          <div className="stat-card">
            <span>System Status</span>
            <h3 style={{ color: '#16a34a' }}>Online</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;