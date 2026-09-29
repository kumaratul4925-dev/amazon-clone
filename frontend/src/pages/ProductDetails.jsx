import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const products = {
  1: { name: "Wireless Headphones", price: 2499, rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80", description: "Bluetooth over-ear headphones with clear sound and comfortable ear cushions." },
  2: { name: "Smart Watch", price: 3999, rating: 4.3, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80", description: "A modern smartwatch for fitness tracking, notifications and everyday use." }
};

export default function ProductDetails() {
  const { id } = useParams();
  const [added, setAdded] = useState(false);
  const product = products[id] || products[1];

  return (
    <section className="container detail">
      <img src={product.image} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <div className="rating">⭐ {product.rating}</div>
        <h2>₹{product.price.toLocaleString("en-IN")}</h2>
        <p>{product.description}</p>
        <button className="btn" onClick={() => setAdded(true)}>Add to Cart</button>
        {added && <p className="success">Added to cart! <Link to="/cart">Go to cart</Link></p>}
      </div>
    </section>
  );
}