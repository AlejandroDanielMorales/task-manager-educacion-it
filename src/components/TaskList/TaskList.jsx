import React from "react";
import "./TaskList.css";
import { FaCheck, FaTrash } from "react-icons/fa";

export default function TaskList({ tasks, performTask ,deleteTask }) {
  return (
    <>
    <div className="task-container">
    <h2>Tareas Pendientes ⏳</h2>
    <ul className="task-list">
    {tasks.length === 0 && <li className="task-item">No hay tareas pendientes aun</li>}
      {tasks.map((task) => (
        task.state === "Pendiente" &&
        <li key={task.id} className="task-item">
          ◘
          {task.text}
          <br />
          Estado : {task.state}
          <br />
          Creada : {task.releaseDate}
          <br />
          Realizada : {task.resolveDate}
          <button className="perform-btn" onClick={() => performTask(task.id)}>
            <FaCheck />
          </button>
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
    </div>
    </>
  );
}
