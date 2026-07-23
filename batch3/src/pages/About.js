import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is a simple online bookstore.</p>

      <Link to="/">Home</Link><br />
      <Link to="/books">Books</Link>
    </div>
  );
}

export default About;