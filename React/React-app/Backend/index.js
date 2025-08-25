// backend/index.js
const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let todos = []; // temporary storage

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/api/todos", (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.json({ message: "Todo added!", todos });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
