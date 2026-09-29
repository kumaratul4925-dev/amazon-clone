import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link className="logo" to="/">amazon<span>.clone</span></Link>
      <div className="location">📍 Deliver to India</div>
      <div className="nav-search">
        <input placeholder="Search products" />
        <button>🔍</button>
      </div>
      <Link to="/login" className="nav-link">Hello, sign in</Link>
      <Link to="/cart" className="cart-link">🛒 Cart</Link>
    </header>
  );
}