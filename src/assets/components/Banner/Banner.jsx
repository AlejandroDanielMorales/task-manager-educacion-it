import React from "react";
import { FaEvernote } from "react-icons/fa";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="logo">
        <FaEvernote className="icon" />
        <h1>Pendientazo</h1>
      </div>
      <p className="subtitle">¡Organizá tus pendientes como un campeón! 📋🔥</p>
    </div>
  );
}
