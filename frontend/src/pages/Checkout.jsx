import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/api";

export default function Checkout() {
  const [placed, setPlaced] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try { await createOrder({ user_id: 1, total_amount: 2499, items: [{ product_id: 1, quantity: 1, price: 2499 }] }); } catch {}
    setPlaced(true);
  };

  if (placed) return <section className="form-page"><div className="form-card"><h1>Order Confirmed 🎉</h1><p>Your demo order has been placed successfully.</p><button className="btn" onClick={() => navigate("/")}>Continue Shopping</button></div></section>;

  return (
    <section className="form-page">
      <form className="form-card" onSubmit={submit}>
        <h1>Checkout</h1>
        <input placeholder="Full name" required />
        <input placeholder="Address" required />
        <input placeholder="City" required />
        <input placeholder="PIN Code" required />
        <button className="btn">Place Order — ₹2,499</button>
      </form>
    </section>
  );
}