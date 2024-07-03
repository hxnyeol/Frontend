import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../setup/auth/Auth";
import { useEffect } from "react";
import axios from "axios";

const Menu = () => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // fetchData from user
  const fetchData = async () => {
    const item = await axios.get("http://localhost:3000/list-travel");
    console.log("fetched Item", item);
    return item;
    // return item;
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.log("fetch error", e);
    }
  }, []);

  return (
    <div>
      <div>Hello world</div>
    </div>
  );
};

export default Menu;
