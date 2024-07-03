import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import { Link } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        password,
      });
      if (response.data) {
        // created Successfully!
      }
    } catch (error) {
      setError("Sign-in failed. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignIn}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
      <Footer />
    </div>
  );
}

export default SignUp;
