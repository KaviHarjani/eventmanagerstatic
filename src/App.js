import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Addtask from './components/Addtask';
import  {useState} from 'react'

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const[tasks,setTasks] = useState([
    {
        id:1,
        text:'Doctor',
        day:'Oct 13th',
        reminder: true,
    },
    {
        id:2,
        text:'Patient',
        day:'Oct 14th',
        reminder: true,
    },
    {
        id:3,
        text:'Senior',
        day:'Oct 15th',
        reminder: true,
    }        
])

//Add Task
const addtask =(task)=>{
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks,newTask])
}

//Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id === id ? {...task,reminder: !task.reminder}: task))
}



  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <Addtask onAdd={addtask} />}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}

    </div>
  );
}

export default App;
