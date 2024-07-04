import { useEffect } from "react";
import { useAuth } from "../../setup/auth/Auth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Logout = () => {
  const { logout } = useAuth();
  const LogOutUser = () => {
    console.log("entry check");
    logout(); // logs out user
  };

  useEffect(() => {
    LogOutUser();
  }, []);
  return (
    <div className="page">
      <Navbar />
      <div>you have been logged out</div>;
      <Footer />
    </div>
  );
};

export default Logout;
