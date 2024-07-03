import { useEffect, useState } from "react";
import axios from "axios";
import "../../index.css";

import { useAuth } from "../../setup/auth/Auth";
import { useNavigate } from "react-router";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, token } = useAuth();
  const navigate = useNavigate();
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
    <div>
      {/* {token && navigate("/menu")} */}
      {token && "You are Logged In"}

      <h2>LogIn</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {
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
      }
    </div>
  );
}

export default SignIn;
