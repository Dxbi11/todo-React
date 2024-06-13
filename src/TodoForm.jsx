import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState({
    title: '',
    description: '', // Include description by default
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title.trim()) { // Validate only the required title field
      addTodo(input);
      setInput({ title: '', description: '' }); // Clear both fields on submit
    }
  };

  return (


    <form onSubmit={handleSubmit}>
      <input
        className="input is-info" // Use className for better accessibility
        type="text"
        value={input.title}
        onChange={(e) => setInput({ ...input, title: e.target.value })}
        placeholder="Add a new task"
      />
      <textarea // Use textarea for multi-line description input
        className="textarea is-info"
        value={input.description}
        onChange={(e) => setInput({ ...input, description: e.target.value })}
        placeholder="Enter a detailed description (optional)"
      />
      <button className="my-2 button is-primary" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
