import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();
export const useTask = () => useContext(TaskContext);

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // 🔄 Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // 💾 Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const finded = tasks.find((task) => task.text === text);
    if (finded === undefined) {
      const newTask = {
        id: uuidv4(),
        text,
        releaseDate: new Date().toLocaleString(),
        resolveDate: "N/A",
        state: "Pendiente",
      };
      setTasks([...tasks, newTask]);
    } else {
      alert("La tarea ya existe");
    }
  };

  const performTask = (id) => {
    const accept = confirm("Desea marcar como realizada esta tarea?");
    if (accept) {
      const formattedDate = new Date().toLocaleString();
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
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        performTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
