import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#222", padding: "1rem" }}>
      <Link to="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
      <Link to="/create" style={{ color: "white" }}>New Post</Link>
    </nav>
  );
}
