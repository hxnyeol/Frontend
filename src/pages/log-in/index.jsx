import { useEffect, useState } from "react";
import axios from "axios";
import "../../index.css";

import { useAuth } from "../../setup/auth/Auth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Navigate } from "react-router";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, token } = useAuth();

  // Redirect to Menu if User is Already Logged in!

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setUsername("");
      setPassword("");
      setError("Sign-in failed. Please try again.");
    }
  };

  return (
    <div className="page">
      <Navbar />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* {token && navigate("/menu")} */}
      {token && <Navigate to="/menu" replace={true} />}

      <h2>LogIn</h2>
      <div className="container">
        <form onSubmit={handleSignIn}>
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
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
