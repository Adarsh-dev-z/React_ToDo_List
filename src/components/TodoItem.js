import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo, startEditing, cancelEditing, isEditing }) => {
  const [editText, setEditText] = useState(todo.text);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate);
  const [editPriority, setEditPriority] = useState(todo.priority);

  const handleEdit = () => {
    editTodo(todo.id, editText, editDueDate, editPriority);
  };

  const priorityColors = {
    low: 'bg-green-200',
    medium: 'bg-yellow-200',
    high: 'bg-red-200',
  };

  if (isEditing) {
    return (
      <li className="flex flex-col p-2 border-b">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="mb-2 p-1 border rounded"
        />
        <input
          type="date"
          value={editDueDate}
          onChange={(e) => setEditDueDate(e.target.value)}
          className="mb-2 p-1 border rounded"
        />
        <select
          value={editPriority}
          onChange={(e) => setEditPriority(e.target.value)}
          className="mb-2 p-1 border rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <div>
          <button onClick={handleEdit} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">
            Save
          </button>
          <button onClick={cancelEditing} className="bg-gray-500 text-white px-2 py-1 rounded">
            Cancel
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className={`flex items-center justify-between p-2 border-b ${priorityColors[todo.priority]}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through' : ''}>
          {todo.text} 
          <span className="text-sm text-gray-500 ml-2">
            (Due: {new Date(todo.dueDate).toLocaleDateString()})
          </span>
        </span>
      </div>
      <div>
        <button
          onClick={() => startEditing(todo)}
          className="text-blue-500 hover:text-blue-700 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;