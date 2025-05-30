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
  return (
    <div className="container">
      <Header title='Hello' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
