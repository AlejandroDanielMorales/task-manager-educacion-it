import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskListDone from "./components/TaskListDone/TaskListDone";
import "./App.css";

export default function App() {

  const [tasks, setTasks] = useState([]);



  const addTask = (text) => {

    const finded = tasks.find(task => task.text === text)
    console.log(finded)

    if (finded === undefined) {
      const newTask = { id: Date.now(), text, releaseDate:new Date().toLocaleString(),resolveDate:"N/A", state: "Pendiente" };
      const arrayPostCoppied2 = [...tasks]
      arrayPostCoppied2.push(newTask)
      setTasks(arrayPostCoppied2);
    }
    else {
      alert("La tarea ya existe")
    }
  };

  const performTask = (id) => {
    const accept = confirm("Desea marcar como realizada esta tarea?");
    if (accept) {
      const formattedDate = new Date().toLocaleString() 
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, state: "Realizada", resolveDate: formattedDate } : task
      );
  
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const accept = confirm("Desea eliminar esta tarea?");
    if (accept) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    }
  }
  
  return (
    <>
      <Header />
      <div className="app-container">
        
        <TaskForm addTask={addTask} />
        <div className="lists-container">
          <TaskList tasks={tasks} performTask={performTask} deleteTask={deleteTask}/>
          <TaskListDone tasks={tasks} deleteTask={deleteTask}/>
        </div>
      </div>
      <Footer />
    </>
  );
}
