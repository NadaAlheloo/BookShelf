import React from "react";

export default function Register() {
  return (
    <section className="page">
      <h1 className="pageTitle">Register</h1>

      <form className="form">
        <label className="label">Full name</label>
        <input className="input" placeholder="Your name" />
        <br></br>
        <label className="label">Email</label>
        <input className="input" placeholder="you@example.com" />
        <br></br>
        <label className="label" htmlFor="regPass">Password</label>
        <input className="input" placeholder="Create a password" />
        <br></br>
        <button className="btn">Register</button>
      </form>
    </section>
  );
}
