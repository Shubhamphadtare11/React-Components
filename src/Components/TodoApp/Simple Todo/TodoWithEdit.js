import { useState } from "react";
import "./index.css";

const TodoWithEdit = () => {
  const [newTodo, setNewTodo] = useState(""); // State for adding new todo
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // State to track the index being edited
  const [editValue, setEditValue] = useState(""); // State for editing todo

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodo([...todo, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todo.filter((_, i) => index !== i);
    setTodo(newTodoList);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todo];
    newTodos[index].checked = !newTodos[index].checked;
    setTodo(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index); // Set the index of the item being edited
    setEditValue(todo[index].text); // Populate the input field with the current text
  };

  const handleSaveTodo = (index) => {
    if (editValue.trim() !== "") {
      const newTodos = [...todo];
      newTodos[index].text = editValue.trim();
      setTodo(newTodos);
      setEditIndex(null); // Reset editIndex after saving
      setEditValue(""); // Clear the input field
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null); // Reset editIndex without saving
    setEditValue(""); // Clear the input field
  };

  return (
    <>
      <h1>To-Do List</h1>

      <div>
        <input
          placeholder="Add Items..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        <ol>
          {todo.map((item, index) => (
            <li key={index}>
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => handleSaveTodo(index)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              ) : (
                <div>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleToggleTodo(index)}
                  />
                  <span style={{ marginRight: "10px", textDecoration: item.checked ? "line-through" : "none" }}>
                    {item.text}
                  </span>
                  <button onClick={() => handleEditTodo(index)}>Edit</button>
                  <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TodoWithEdit;
