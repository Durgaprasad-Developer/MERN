// frontend/src/App.js
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Fetch todos from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Add todo to backend
  const addTodo = () => {
    fetch("http://localhost:5000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: input })
    })
      .then(res => res.json())
      .then(data => setTodos(data.todos));
    setInput("");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
