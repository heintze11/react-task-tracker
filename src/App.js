import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc appt',
      day: 'Nov 5th',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'Nov 10th',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shop',
      day: 'Nov 6th',
      reminder: false,
    },
  ]);

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
  
}

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const reminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder}/> : 'No Tasks Here, Go Hiking'}
    </div>
  );
}

export default App;
