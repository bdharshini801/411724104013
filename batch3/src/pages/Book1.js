import { Link } from "react-router-dom";

function Book1() {
  return (
    <div>
      <h2>Atomic Habits</h2>
      <p>Author: James Clear</p>
      <p>Genre: Self-help</p>
      <p>Description: Build good habits and break bad ones.</p>

      <Link to="/books">Back to Books</Link>
    </div>
  );
}

export default Book1;