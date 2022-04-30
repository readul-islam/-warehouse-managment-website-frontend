
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";




const InventoryDetails = () => {
  const [selected , setSelected] = useState({})
  const { id } = useParams();
 
  useEffect(() => {

    fetch(`http://localhost:5000/add-inventory/${id}`)
    .then(res => res.json())
    .then(data => {
      setSelected(data)
      console.log(data)
     
      
    })


  },[id])
  
  
  

  return (
   <>
   <div className="w-screen ">
      <div className="w-full grid grid-cols-4 lg:px-24 ">
        <div>
          <div className="flex flex-col font-semibold  mt-8">
            <div
             
              className="flex items-center "
            > 
          <input
                  className="border rounded px-3 py-1 mt-2 focus:outline-0"
                  type="text" name="title"
                  placeholder="add" required
                />
            
             
            </div>
            <p  className="flex items-center space-x-2 mt-7">
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Add quantity
            </button>
            
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Delivered
            </button>
           
            </p>
          </div>
        </div>
        <div className="  col-span-3 bg-[#F4F7FC]">
        <div className=" px-8  mt-8 w-full h-[88vh]">


        <a href="/" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={selected.banner} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selected.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{selected.description}</p>
    </div>
</a>


            <Link to='/manage-inventory'
              type="submit"
              className="bg-blue-700 py-2  px-8 absolute right-28 text-white mt-4 rounded hover:bg-blue-800 "
            >
         Manage inventory
            </Link>
            </div>
          
        </div>
      </div>
    </div>
   
   </>
  );
};

export default InventoryDetails;
