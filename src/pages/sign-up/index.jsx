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

  const handleSignUp = async (e) => {
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
    <div className="page">
      <Navbar />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="container">
        <form onSubmit={handleSignUp}>
          <div>
            <div>
              <h2 className="tag">Sign Up</h2>
            </div>
          </div>
          <div>
            <div>Username</div>
            <div></div>
          </div>

          <div>
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <div>Password</div>
          </div>

          <div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div>
              {" "}
              <button type="submit">Sign In</button>
            </div>
          </div>
          <div>
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
