import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../setup/auth/Auth";
import { useEffect, useState } from "react";

import axios from "axios";

import "./Form.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
  const [formData, setFormData] = useState({
    start: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelMode: "",
    notes: "",
    bookmark: false,
    activities: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
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
      <Navbar />
      <div>
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
                  value={formData["travelMode"]}
                  onChange={(e) => {
                    const res = e.target.value;
                    console.log(res);
                    setFormData({ ...formData, travelMode: res });
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
                <button
                  onClick={() => {
                    console.log(formData.bookmark);

                    setFormData({
                      ...formData,
                      bookmark: !formData["bookmark"],
                    });
                  }}
                >
                  Bookmark
                </button>
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
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
