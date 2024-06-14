import { useState } from "react";
import "./index.css"

const Todo = () => {
  const [value, setValue] = useState();
  const [todo, setTodo] = useState([]);

  const handleAddTodo = () => {
    if (value.trim() !== "") {
      setTodo([...todo, {text:value.trim(), checked:false}]);
      setValue("");
    }
  };

  const handleDeleteTodo = (index)=>{
    const newTodos = [...todo];
    newTodos.splice(index,1);
    setTodo(newTodos);
  }

  const handleToggleTodo = (index)=>{
    const newTodos = [...todo];
    newTodos[index].checked = !newTodos[index].checked;
    setTodo(newTodos);
  }

  return (
    <>
    <h1>To-Do List</h1>
      <div>
        <input
          placeholder="Add Items..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        <ol>
          {todo &&
            todo.map((item, index) => {
              return <li key={index}>
                <input type="checkbox" checked={item.checked} onChange={()=>handleToggleTodo(index)} />
                <span style={{marginRight: "10px", textDecoration:item.checked ? "line-through" : "none"}}>{item.text}</span>
                <button onClick={()=>handleDeleteTodo(index)}>Delete</button>
              </li>;
            })}
        </ol>
      </div>
    </>
  );
};

export default Todo;
