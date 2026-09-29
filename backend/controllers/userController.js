import db from "../db/connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const [result] = await db.query("INSERT INTO users (name,email,password) VALUES (?,?,?)", [name,email,hash]);
    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) { res.status(400).json({ message: error.message }); }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (!rows.length || !(await bcrypt.compare(password, rows[0].password))) return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET || "dev-secret", { expiresIn: "1d" });
    res.json({ token, user: { id: rows[0].id, name: rows[0].name, email: rows[0].email } });
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const getUser = async (req, res) => {
  const [rows] = await db.query("SELECT id,name,email,created_at FROM users WHERE id = ?", [req.params.id]);
  res.json(rows[0] || null);
};