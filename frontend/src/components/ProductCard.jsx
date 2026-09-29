import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <div className="rating">⭐ {product.rating}</div>
        <div className="price">₹{Number(product.price).toLocaleString("en-IN")}</div>
        <p>{product.description}</p>
        <Link to={`/product/${product.id}`} className="btn">View Product</Link>
      </div>
    </article>
  );
}