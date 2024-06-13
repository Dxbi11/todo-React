import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const API_URL = 'http://localhost:5000/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    const response = await axios.post(API_URL, todo);
    setTodos([...todos, response.data]);
  };

  const editTodo = async (id, newText) => {
    const response = await axios.put(`${API_URL}/${id}`, newText);
    setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1 class="title is-2">To Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
