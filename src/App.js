import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
