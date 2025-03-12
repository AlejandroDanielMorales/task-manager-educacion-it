import React from 'react'
import "./TaskListDone.css";
import { FaTrash } from 'react-icons/fa';

export default function TaskListDone({tasks , deleteTask}) {
  return (
    <>
    <div className="task-container">
        <h2>Tareas Realizadas ✅</h2>
      <ul className="task-list">
      {tasks.length === 0 && <li className="task-item">No hay tareas realizadas aun</li>}
      {tasks.map((task) => (
        task.state === "Realizada" &&
        <li key={task.id} className="task-item">
          ◘
          {task.text}
          <br />
          Estado : {task.state}
          <br />
          Creada : {task.releaseDate}
          <br />
          Realizada : {task.resolveDate}
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            <FaTrash />
          </button>
        </li>       
      ))}
    </ul>
    </div>
    </>
  )
}
