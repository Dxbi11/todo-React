import React, { useState } from 'react';

function Todo({ todo, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title); // Update state name for clarity
  const [newDescription, setNewDescription] = useState(todo.description || ""); // Set initial description or empty string

  const handleEdit = () => {
    if (isEditing && newTitle.trim()) {
      editTodo(todo.id, { ...todo, title: newTitle, description: newDescription }); // Update both title and description
    }
    setIsEditing(!isEditing);
  };

  return (
    <section class="hero is-info">
      <div class='hero-body'>
        {isEditing ? (
          <>
            <input
              className="input is-info" // Use className for better accessibility
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Edit Title"
            />
            <textarea // Use textarea for multi-line description input
              className="textarea is-info"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Edit Description (optional)"
            />
          </>
        ) : (
          <>
            <h1 class="title">{todo.title}</h1>
            {todo.description && <p class="subtitle">{todo.description}</p>} {/* Conditionally render description */}
          </>
        )}
        <button onClick={handleEdit} class="mx-2 my-2 button is-dark">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => deleteTodo(todo.id)} class=" my-2 button is-danger">
          Delete
        </button>
      </div>
    </section>
  );
}

export default Todo;
