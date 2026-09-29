import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try { await registerUser(form); } catch {}
    navigate("/login");
  };

  return (
    <section className="form-page">
      <form onSubmit={submit} className="form-card">
        <h1>Create Account</h1>
        <input placeholder="Name" required onChange={e => setForm({...form, name: e.target.value})} />
        <input type="email" placeholder="Email" required onChange={e => setForm({...form, email: e.target.value})} />
        <input type="password" placeholder="Password" required onChange={e => setForm({...form, password: e.target.value})} />
        <button className="btn">Register</button>
        <p>Already registered? <Link to="/login">Sign in</Link></p>
      </form>
    </section>
  );
}