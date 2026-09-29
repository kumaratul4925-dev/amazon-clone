import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryBar from "../components/CategoryBar";
import ProductList from "../components/ProductList";
import { getProducts } from "../services/api";

const demoProducts = [
  { id: 1, category_id: 1, name: "Wireless Headphones", description: "Bluetooth over-ear headphones with clear sound.", price: 2499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80", rating: 4.5 },
  { id: 2, category_id: 2, name: "Smart Watch", description: "Fitness tracking smartwatch with modern design.", price: 3999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80", rating: 4.3 },
  { id: 3, category_id: 3, name: "Running Shoes", description: "Comfortable everyday running shoes.", price: 2999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80", rating: 4.6 },
  { id: 4, category_id: 4, name: "Coffee Maker", description: "Compact coffee maker for home and office.", price: 4499, image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=700&q=80", rating: 4.2 },
  { id: 5, category_id: 5, name: "Programming Book", description: "Learn modern web development fundamentals.", price: 799, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=80", rating: 4.7 },
  { id: 6, category_id: 6, name: "Backpack", description: "Durable backpack for college and travel.", price: 1499, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80", rating: 4.4 }
];

export default function Home() {
  const [products, setProducts] = useState(demoProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getProducts().then((res) => {
      if (Array.isArray(res.data) && res.data.length) setProducts(res.data);
    }).catch(() => {});
  }, []);

  const filtered = products.filter((p) =>
    (category === "All" || p.category === category || String(p.category_id) === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <h1>Welcome to Amazon Clone</h1>
        <p>Shop products with a clean, responsive e-commerce experience.</p>
      </section>
      <section className="container">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryBar selected={category} onSelect={setCategory} />
        <ProductList products={filtered} />
      </section>
    </>
  );
}