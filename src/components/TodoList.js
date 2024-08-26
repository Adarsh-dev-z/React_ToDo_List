import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, startEditing, cancelEditing, editingTodo }) => {
  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          startEditing={startEditing}
          cancelEditing={cancelEditing}
          isEditing={editingTodo && editingTodo.id === todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;