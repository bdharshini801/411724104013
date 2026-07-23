import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Online Book Store</h1>

      <Link to="/books">Books</Link><br />
      <Link to="/authors">Authors</Link><br />
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;