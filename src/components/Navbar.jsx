import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-top">
      <div className="logo">Logo</div>
      <div className="nav-bar">
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
      </div>
    </nav>
  );
};

export default Navbar;
