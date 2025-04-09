
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import TaskListDone from "../../components/TaskListDone/TaskListDone";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import { useTask } from "../../context/TaskContext";


export default function Home() {
  const { tasks, addTask, performTask, deleteTask } = useTask();
  
  return (
    <>
      <Banner/>
      <div className="app-container">    
        <TaskForm addTask={addTask} />
        <div className="lists-container">
          <TaskList tasks={tasks} performTask={performTask} deleteTask={deleteTask}/>
          <TaskListDone tasks={tasks} deleteTask={deleteTask}/>
        </div>
      </div>
    </>
  );
}