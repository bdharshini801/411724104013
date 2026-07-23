import { Link } from "react-router-dom";

function Authors() {
  return (
    <div>
      <h2>Authors</h2>

      <ul>
        <li><Link to="/authors/james-clear">James Clear</Link></li>
      </ul>
    </div>
  );
}

export default Authors;