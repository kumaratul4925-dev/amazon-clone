import db from "../db/connection.js";

export const createOrder = async (req, res) => {
  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();
    const { user_id, total_amount, items = [] } = req.body;
    const [order] = await connection.query(
      "INSERT INTO orders (user_id,total_amount,status) VALUES (?,?,?)",
      [user_id,total_amount,"PLACED"]
    );
    for (const item of items) {
      await connection.query(
        "INSERT INTO order_items (order_id,product_id,quantity,price) VALUES (?,?,?,?)",
        [order.insertId,item.product_id,item.quantity,item.price]
      );
    }
    await connection.commit();
    res.status(201).json({ orderId: order.insertId, status: "PLACED" });
  } catch (error) {
    await connection.rollback();
    res.status(500).json({ message: error.message });
  } finally { connection.release(); }
};

export const getUserOrders = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC", [req.params.userId]);
  res.json(rows);
};

export const getOrder = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM orders WHERE id = ?", [req.params.id]);
  res.json(rows[0] || null);
};