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

const Menu = () => {
  const { token } = useAuth();
  const location = useLocation();
  const [data, setData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);
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
  const handleDelete = (id) => {
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

  const handleShow = () => {
    console.log(isFormVisible);
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <Navbar />
      <div>
        {data &&
          data.map((item) => {
            return (
              <div className="list-container" key={item._id}>
                <div>
                  <div>
                    <span>To</span>
                    {item.destination}
                  </div>
                  <div>
                    <span>From</span> {item.start}{" "}
                  </div>
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
          <div onClick={handleShow}>
            <IoIosAddCircleOutline />
          </div>
        </div>
      </div>

      <div>
        {isFormVisible && (
          <div className="container">
            <form onSubmit={handleForm}>
              <div>
                <div>Start</div>
                <div>Destination</div>
              </div>
              <div>
                <div>
                  <input
                    value={formData["start"]}
                    onChange={(e) => {
                      const res = e.target.value;
                      console.log(res);
                      setFormData({ ...formData, start: res });
                    }}
                  />
                </div>
                <div>
                  <input
                    value={formData["destination"]}
                    onChange={(e) => {
                      const res = e.target.value;
                      console.log(res);
                      setFormData({ ...formData, destination: res });
                    }}
                  />
                </div>
              </div>
              <div>
                <div>Start Date</div>
                <div>End Date</div>
                <div>Mode Of Travel</div>
              </div>
              <div>
                <div>
                  <input
                    type="date"
                    value={formData["startDate"]}
                    onChange={(e) => {
                      const res = e.target.value;
                      console.log(res);
                      setFormData({ ...formData, startDate: res });
                    }}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    value={formData["endDate"]}
                    onChange={(e) => {
                      const res = e.target.value;
                      console.log(res);
                      setFormData({ ...formData, endDate: res });
                    }}
                  />
                </div>

                <div>
                  <select
                    name="travel"
                    id="travel"
                    value={formData["modeOfTravel"]}
                    onChange={(e) => {
                      const res = e.target.value;
                      console.log(res);
                      setFormData({ ...formData, modeOfTravel: res });
                    }}
                  >
                    <option value="Cruise">Cruise</option>
                    <option value="Plane">Plane</option>
                    <option value="Rail">Rail</option>
                    <option value="Road">Road</option>
                  </select>
                </div>
              </div>
              <div>
                <div>Notes</div>
                <div>Activities</div>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    value={formData["notes"]}
                    onChange={(e) => {
                      const res = e.target.value;
                      console.log(res);
                      setFormData({ ...formData, notes: res });
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={formData["activities"]}
                    onChange={(e) => {
                      const res = e.target.value;
                      console.log(res);
                      setFormData({ ...formData, activities: res });
                    }}
                  />
                </div>

                <div>
                  <span
                    onClick={() => {
                      console.log(formData.bookmarked);

                      setFormData({
                        ...formData,
                        bookmarked: !formData["bookmarked"],
                      });
                    }}
                  >
                    {formData.bookmarked ? <FaBookmark /> : <FaRegBookmark />}
                  </span>
                </div>
              </div>

              <div>
                <div>
                  {" "}
                  <button>Add Plan</button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
