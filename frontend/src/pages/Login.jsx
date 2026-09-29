import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try { await loginUser({ email, password }); } catch {}
    navigate("/");
  };

  return (
    <section className="form-page">
      <form onSubmit={submit} className="form-card">
        <h1>Sign In</h1>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button className="btn">Sign In</button>
        <p>New customer? <Link to="/register">Create your account</Link></p>
      </form>
    </section>
  );
}