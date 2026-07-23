import { Link } from "react-router-dom";

function Author1() {
  return (
    <div>
      <h2>James Clear</h2>
      <p>Country: USA</p>
      <p>Famous Book: Atomic Habits</p>
      <p>Biography: Writer focused on habits and self-improvement.</p>

      <Link to="/authors">Back to Authors</Link>
    </div>
  );
}

export default Author1;