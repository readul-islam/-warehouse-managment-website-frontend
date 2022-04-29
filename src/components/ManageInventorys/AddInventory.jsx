import user from "../../assets/img/users-alt 1.png"
import plus from "../../assets/img/plus 1.png";
import "./AddInventory.css";
import { Link } from "react-router-dom";

const AddInventory = () => {
  const ManageInventory = (event) =>{

event.preventDefault();
const title =event.target.title.value;
const description =event.target.description.value;
const date =event.target.date.value;
const banner =event.target.banner.value;
const userInventory = {title, description, date, banner};


fetch('http://localhost:4000/addevent',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
body: JSON.stringify(userInventory)
})
.then(res => res.json())
.then(data => {
  console.log(data)
  event.target.reset();
})





  }
  return (
    <div className="w-screen ">
      <div className="w-full grid grid-cols-4 lg:px-24 ">
        <div>
          <div className="flex flex-col font-semibold  mt-8">
            <Link
              to="/manage-inventory"
              className="flex items-center space-x-2"
            > 
              <img className="w-5" src={user} alt="" />
              <p>Manage Inventory</p>
            </Link>
            <Link to="/add-inventory" className="flex items-center space-x-2 mt-7">
              <img className="w-5" src={plus} alt="" />
              <p>Add Inventory</p>
            </Link>
          </div>
        </div>
        <div className="  col-span-3 bg-[#F4F7FC]">
          <form onSubmit={ManageInventory}>
          <div className=" px-8  mt-8 w-full h-[100vh]">
            <div className="bg-white grid grid-cols-2 rounded px-8 py-7  gap-10">
              <div className="flex flex-col">
                <label>Event Title</label>
                <input
                  className="border rounded px-3 py-1 mt-2 focus:outline-0"
                  type="text" name="title"
                  placeholder="Enter title" required
                />
                <label className="pt-5">Description</label>
                <textarea
                  className="border rounded mt-2 px-3 py-1 focus:outline-0"
                  name="description"
                  id=""
                  cols="30"
                  rows="6" required
                  placeholder="Enter Description"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label>Event Date</label>
                <input
                  className="border mt-2 rounded font-semibold px-3 py-1 focus:outline-0"
                  type="date"
                  name="date" required
                  id=""
                />
                <label className="pt-5">Banner</label>
                <input
                  className="icon border rounded  py-1 mt-2 focus:outline-0"
                  type="text" name="banner" required
                  placeholder="https://example.png"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary-100 py-2  px-8 absolute right-28 text-white mt-4 rounded hover:bg-sky-500"
            >
              Submit{" "}
            </button>
          </div>
</form>
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
