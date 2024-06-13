const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv').config();


const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Create a new todo
app.post('/todos', async (req, res) => {
  const { title, description } = req.body;
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
    },
  });
  res.json(todo);
});

// Get all todos
app.get('/todos', async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

// Update a todo
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, done } = req.body;
  const todo = await prisma.todo.update({
    where: { id: parseInt(id) },
    data: { title, description, done },
  });
  res.json(todo);
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.todo.delete({ where: { id: parseInt(id) } });
  res.json({ message: 'Todo deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
