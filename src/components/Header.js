import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
          <div className="title">Green Bookshelf</div>

      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>Home</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>Login</NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>Register</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>About</NavLink>
      </nav>
    </header>
  );
}
