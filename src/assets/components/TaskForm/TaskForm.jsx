import React from "react";
import "./TaskForm.css";
import { useForm } from 'react-hook-form';

export default function TaskForm({ addTask }) {
  const { register, handleSubmit, reset} = useForm();


  function handleAddTask(data) {
    console.log(data);
    addTask(data.textTask); 
    reset(); 
  }

  return (
    <form onSubmit={handleSubmit(handleAddTask)} className="task-form">
      <input
        type="text"
        {...register("textTask")}
        placeholder="Agregar una tarea"
        maxLength={20}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
