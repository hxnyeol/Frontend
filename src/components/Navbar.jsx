import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/register" className="nav-link">
        Register
      </Link>
      <Link to="/menu" className="nav-link">
        Menu
      </Link>
      <Link to="/logout" className="nav-link">
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
