export default function Item({ name, quantity, category, onSelect }) {
    const handleItemClick = () => {
      onSelect();
    };
  
    return (
      <li className="list-none px-4 mb-4 ml-4 mr-4 bg-slate-800" onClick={handleItemClick}>
        <ul>Name: {name}</ul>
        <ul>Quantity: {quantity}</ul>
        <ul>Category: {category}</ul>
      </li>
    );
  }