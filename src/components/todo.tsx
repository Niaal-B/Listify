import React, { useState } from "react";

interface Task {
  id: number;
  text: string;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    if (!task.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Listify - Task Manager</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.text} <button onClick={() => removeTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
