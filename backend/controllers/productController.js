import db from "../db/connection.js";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products ORDER BY id DESC");
    res.json(rows);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const getProduct = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: "Product not found" });
    res.json(rows[0]);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const createProduct = async (req, res) => {
  try {
    const { category_id, name, description, price, image, rating, stock } = req.body;
    const [result] = await db.query(
      "INSERT INTO products (category_id,name,description,price,image,rating,stock) VALUES (?,?,?,?,?,?,?)",
      [category_id, name, description, price, image, rating, stock]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) { res.status(500).json({ message: error.message }); }
};