import React from "react";

export default function Login() {
  return (
    <section className="page">
      <h1 className="pageTitle">Login</h1>

      <form className="form">
        <label className="label">Email</label>
        <input className="input" placeholder="you@example.com" />
        <br></br>
        <label className="label">Password</label>
        <input className="input" placeholder="••••••••" />
        <br></br>
        <button className="btn">Login</button>
      </form>
    </section>
  );
}
