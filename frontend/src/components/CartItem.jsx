export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>₹{Number(item.price).toLocaleString("en-IN")} × {item.quantity}</p>
        <button className="link-button" onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
}