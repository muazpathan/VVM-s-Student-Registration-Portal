// main express server file
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const Student = require('./Student');

const app = express();
const PORT = 5000;

// middlewares
app.use(cors());
app.use(express.json());

// sync table with mysql
sequelize.sync()
  .then(() => console.log('Database and Student table ready'))
  .catch((err) => console.log('Error syncing db: ' + err));

// 1. get all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
});

// 2. get single student by id
app.get('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student', error });
  }
});

// 3. add new student
app.post('/api/students', async (req, res) => {
  try {
    const { name, rollNo, department, email, cgpa } = req.body;
    const newStudent = await Student.create({
      name,
      rollNo,
      department,
      email,
      cgpa
    });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error });
  }
});

// 4. update student details
app.put('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const { name, rollNo, department, email, cgpa } = req.body;
    await student.update({
      name,
      rollNo,
      department,
      email,
      cgpa
    });

    res.json({ message: 'Student updated successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
});

// 5. delete student
app.delete('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    await student.destroy();
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});