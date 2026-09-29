import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products.length) return <p className="empty">No products found.</p>;
  return <div className="product-grid">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>;
}