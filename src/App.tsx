import { useState } from 'react';
import Header from './components/Header';
import Tasks, { ITasks } from './components/Tasks';
import './global.css';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isComplete: false,
      },
    ]);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
