import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Eka',
        day: 'Ma',
        reminder: true,
    },
    {
        id: 2,
        text: 'Toka',
        day: 'Ti',
        reminder: true,
    },
    {
        id: 3,
        text: 'Kolmas',
        day: 'Ke',
        reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title='Hello' />
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No Tasks'
      }
    </div>
  );
}

export default App;
