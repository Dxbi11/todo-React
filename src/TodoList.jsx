import React from 'react';
import Todo from './Todo';

function TodoList({ todos, editTodo, deleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
