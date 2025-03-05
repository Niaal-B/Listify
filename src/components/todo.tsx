import React, { useState } from "react";
import "../todo.css";
import MotivationalQuote from "./MotivationalQuote"; // Import the new component

interface Task {
  id: number;
  text: string;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");
  const [triggerUpdate, setTriggerUpdate] = useState<number>(0); // State to trigger quote update

  const addTask = () => {
    if (!task.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: task,
    };

    setTasks([...tasks, newTask]);
    setTask(""); // Clear input
    setTriggerUpdate(triggerUpdate + 1); // Trigger quote update
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
    setTriggerUpdate(triggerUpdate + 1); // Trigger quote update
  };

  return (
    <div className="todo-container">
      <h2>Listify - Your Task Manager 🚀</h2>

      <MotivationalQuote triggerUpdate={triggerUpdate} /> {/* Display the quote component */}

      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id} className="task-item">
            <span>{t.text}</span>
            <button className="delete-btn" onClick={() => removeTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
