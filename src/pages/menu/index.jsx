import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../setup/auth/Auth";
import { useEffect } from "react";
import axios from "axios";

const Menu = () => {
  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.log("fetch error");
    }
  }, []);
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // fetchData from user
  const fetchData = async () => {
    console.log("before fetching", token);
    const item = await axios.get("http://localhost:3000/list-travel");
    console.log(item);
    return item;
    // return item;
  };

  return (
    <div>
      <div>Hello world</div>
    </div>
  );
};

export default Menu;
