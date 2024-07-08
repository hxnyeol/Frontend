import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../setup/auth/Auth";
import { useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from "axios";

import "./Form.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ItemForm from "./Components/Form";

const Menu = () => {
  const { token } = useAuth();
  const location = useLocation();
  const [data, setData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  const [formData, setFormData] = useState({
    start: "",
    destination: "",
    startDate: "",
    endDate: "",
    modeOfTravel: "",
    notes: "",
    bookmarked: false,
    activities: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/add-travel", {
        ...formData,
      })
      .then((response) => {
        fetchData();
        console.log("Complete");
      });
  };
  const fetchData = () => {
    try {
      axios.get("http://localhost:3000/list-travel").then((response) => {
        console.log("fetch data", response.data);
        setData(response.data);
      });
    } catch (e) {
      console.log("fetch error", e);
      setData([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:3000/travel-items/${id}`)
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((e) => {
        console.log("Error has occurede in axxios", e);
      });
  };

  const handleBookmark = async (id) => {
    console.log("item id: ", id);
    axios.patch(`http://localhost:3000/travel-items/${id}`).then((res) => {
      console.log(res.data);
      fetchData();

      // Do the change operation! and Re-render
    });
  };

  const handleShow = () => {
    console.log(isFormVisible);
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="page">
      <Navbar />
      <div>
        {data &&
          data.map((item) => {
            return (
              <div className="list-container" key={item._id}>
                <div>
                  <div>
                    <span>To </span>
                    {item.destination}
                  </div>
                  <span>From</span> {item.start} {item.startDate}
                  <span
                    onClick={() => {
                      handleBookmark(item._id);
                    }}
                  >
                    {item.bookmarked ? <FaBookmark /> : <FaRegBookmark />}
                  </span>
                </div>
                <span
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  <MdOutlineDeleteOutline />
                </span>{" "}
                <span>Edit</span>
              </div>
            );
          })}

        <div>
          <div className="add-button" onClick={handleShow}>
            <IoIosAddCircleOutline width="10px" />
          </div>
        </div>
      </div>

      <div>
        {isFormVisible && (
          <ItemForm
            handleForm={handleForm}
            formData={formData}
            setFormData={setFormData}
            buttonType="Add Plan"
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
