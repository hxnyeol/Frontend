import { useEffect } from "react";
import { useAuth } from "../../setup/auth/Auth";

const Logout = () => {
  const { logout } = useAuth();
  const LogOutUser = () => {
    console.log("entry check");
    logout(); // logs out user
  };

  useEffect(() => {
    LogOutUser();
  }, []);
  return <div>you have been logged out</div>;
};

export default Logout;
