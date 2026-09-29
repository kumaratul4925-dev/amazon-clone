import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 2499, quantity: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80" }
  ]);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="container">
      <h1>Shopping Cart</h1>
      {items.map(item => <CartItem key={item.id} item={item} onRemove={(id) => setItems(items.filter(x => x.id !== id))} />)}
      {!items.length ? <p>Your cart is empty.</p> : <div className="cart-total"><h2>Total: ₹{total.toLocaleString("en-IN")}</h2><Link className="btn" to="/checkout">Proceed to Checkout</Link></div>}
    </section>
  );
}