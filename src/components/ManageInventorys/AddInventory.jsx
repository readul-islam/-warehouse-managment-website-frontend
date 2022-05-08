import user from "../../assets/img/users-alt 1.png"
import plus from "../../assets/img/plus 1.png";
import "./AddInventory.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AddInventory = () => {
  const inputUser = (event) =>{

event.preventDefault();
const title =event.target.title.value;
const description =event.target.description.value;
const price =event.target.price.value;
const email =event.target.email.value;
const banner =event.target.banner.value;
const supliername = event.target.supliername.value;
const userInventory = {title,supliername, description, price, email, banner};





  fetch('http://localhost:5000/add-inventory',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(userInventory)
  })
  .then(res => res.json())
  .then(data => {
   if(data.result.insertedId){
     toast.success('Item successfully')
     
   }else{
     toast.success('Item unsuccessfully')
   }
    event.target.reset();
  })







  }
  
  return (
    <div className="">
      <div className="w-full grid md:grid-cols-4 grid-cols-1 lg:px-24">
        <div className=''>
          <div className="flex flex-col font-semibold ml-4 my-4 md:mt-8">
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
        <div className="md:col-span-3 col-span-1 bg-[#F4F7FC]">
          <form onSubmit={inputUser}>
          <div className="md:px-8 px-4 mt-6 w-full h-[88vh]">
            <div className="grid md:grid-cols-2 rounded md:px-8 md:py-7 md:gap-10">
              <div className="flex flex-col">
                <label className="pt-5 px-2 font-medium" >Event Title</label>
                <input
                  className="border rounded px-3 py-1 mt-2 focus:outline-0"
                  type="text" name="title"
                  placeholder="Enter title" required
                />
                <label className="pt-5 px-2 font-medium">Suplier Name</label>
                <input
                  className="border rounded px-3 py-1 mt-2 focus:outline-0"
                  type="text" name="supliername"
                  placeholder="Suplier Name" required
                />
                <label className="pt-5  px-2 font-medium">Description</label>
                <textarea
                  className="border rounded mt-2 px-3 py-1 focus:outline-0"
                  name="description"
                  id=""
                  cols="30"
                  rows="6" required
                  placeholder="Enter Description"
                  
                  
                ></textarea>
              </div>
              <div className="flex flex-col ">
              <label className="pt-5 px-2 font-medium">E-mail</label>
                <input
                  className="border mt-2 rounded  px-3 py-1 focus:outline-0"
                  type="email"
                  name="email" required
                  id=""
                  placeholder="example@gmail.com"
               
                />
                <label className="pt-5 px-2 font-medium">Price</label>
                <input
                  className="border mt-2 rounded  px-3 py-1 focus:outline-0"
                  type="number"
                  name="price" required
                  id=""
                />
                <label className=" pt-5 px-2 font-medium">Banner</label>
                <input
                  className="icon border rounded  py-1 mt-2 focus:outline-0"
                  type="text" name="banner" required
                  placeholder="https://example.png"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-sky-500 uppercase font-bold py-2  px-8 absolute right-[5%] md:right-[14%] lg:right-[9%] text-white mt-4 rounded hover:bg-sky-600 duration-500"
            >
              Update{" "}
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
