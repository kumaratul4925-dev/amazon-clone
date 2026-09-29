const categories = ["All", "Electronics", "Books", "Fashion", "Home", "Beauty", "Sports"];

export default function CategoryBar({ selected, onSelect }) {
  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "active" : ""}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}