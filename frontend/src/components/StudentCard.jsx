import React from 'react';
import { Link } from 'react-router-dom';

function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <div>
        <h3>{student.name}</h3>
        <span className="badge">{student.rollNo}</span>
        <p style={{ margin: '4px 0', fontSize: '14px', color: '#475569' }}>
          <strong>Department:</strong> {student.department}
        </p>
        <p style={{ margin: '4px 0', fontSize: '14px', color: '#475569' }}>
          <strong>CGPA:</strong> {student.cgpa}
        </p>
      </div>

      <div className="card-actions">
        <Link to={`/student/${student.id}`} className="btn btn-view">
          View
        </Link>
        <Link to={`/edit/${student.id}`} className="btn btn-edit">
          Edit
        </Link>
        <button onClick={() => onDelete(student.id)} className="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;