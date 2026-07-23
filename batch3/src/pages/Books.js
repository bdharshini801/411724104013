import { Link } from "react-router-dom";

function Books() {
  return (
    <div>
      <h2>Books</h2>

      <ul>
        <li><Link to="/books/atomic-habits">Atomic Habits</Link></li>
        <li><Link to="/books/alchemist">The Alchemist</Link></li>
        <li><Link to="/books/book3">Book 3</Link></li>
        <li><Link to="/books/book4">Book 4</Link></li>
        <li><Link to="/books/book5">Book 5</Link></li>
        <li><Link to="/books/book6">Book 6</Link></li>
      </ul>
    </div>
  );
}

export default Books;