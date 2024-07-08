import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const ItemForm = ({ handleForm, formData, setFormData, buttonType }) => {
  return (
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
            <button>{buttonType}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
