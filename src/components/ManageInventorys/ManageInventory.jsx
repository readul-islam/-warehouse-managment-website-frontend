import user from "../../assets/img/users-alt 1.png"
import plus from "../../assets/img/plus 1.png";
import "./ManageInventory.css";
import { Link } from "react-router-dom";

const ManageInventory = () => {
 
 
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
        <div className=" px-8  mt-8 w-full h-[100vh]">
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
