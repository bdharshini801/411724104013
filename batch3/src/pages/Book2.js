import { Link } from "react-router-dom";

function Book2() {
  return (
    <div>
      <h2>The Alchemist</h2>

      <p><strong>Author:</strong> Paulo Coelho</p>
      <p><strong>Genre:</strong> Fiction / Adventure</p>
      <p>
        <strong>Description:</strong> A story about Santiago, a shepherd boy,
        who travels in search of treasure and discovers his true purpose in life.
      </p>

      {/* Navigation Links */}
      <br />
      <Link to="/books">⬅ Back to Books</Link>
      <br />
      <Link to="/books/atomic-habits">⬅ Previous Book</Link>
    </div>
  );
}

export default Book2;