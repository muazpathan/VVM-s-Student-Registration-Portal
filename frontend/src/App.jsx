import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import StudentDetails from './components/StudentDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/add" element={<div className="container"><AddStudent /></div>} />
        <Route path="/edit/:id" element={<div className="container"><EditStudent /></div>} />
        <Route path="/student/:id" element={<div className="container"><StudentDetails /></div>} />
      </Routes>
    </div>
  );
}

export default App;