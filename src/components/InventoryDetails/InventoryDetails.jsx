
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";





const InventoryDetails = () => {
  const { id } = useParams();
  const init = 0;
  const [selected , setSelected] = useState({})
  const [quantity, setQuantity] = useState(false)
 
  


  
 
  useEffect(() => {

    fetch(`https://evening-basin-25191.herokuapp.com/add-inventory/${id}`)
    .then(res => res.json())
    .then(data => {
      setSelected(data)
    })
},[id,quantity])
  
const updateQuan = (add, deleted) => {
  

    fetch(`https://evening-basin-25191.herokuapp.com/add-inventory/${id}?add=${add}&deleted=${deleted}`,{
      method: 'PUT',
     
    })
    .then(res => res.json())
    .then(data =>{
      
      if(data.error){

        return toast.error(data.error,{id:1})
      }
      setQuantity(!quantity)
    })
    
    
  }
  
  const addQuantity = (event)=>{
    event.preventDefault();
    const addValue = event.target.quan.value
    if(addValue){
     console.log(addValue)
 updateQuan(addValue,init)
   }
   
   }
  
  
  const deleteQuantity = ()=>{
    updateQuan(init, 1)
   
   }
  

  return (
   <>
   <div className="w-screen ">
      <div className="w-full xl:grid grid-cols-4  xl:px-24 ">
        <div className="md:py-4 md:px-4 px-3">
          <form  onSubmit={addQuantity} className="flex flex-col font-semibold  mt-8">
            <div
             
              className="flex items-center "
            > 
          <input 
                  className="border rounded px-3 py-1 mt-2 focus:outline-0"
                  type="text" name="quan"
                  placeholder="add" 
                />
            
             
            </div>
            <div  className="flex items-center space-x-2 mt-7">
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Add quantity
            </button>
            
            <p
            onClick={deleteQuantity}
              
              className="text-white cursor-pointer  bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Delivered
            </p>
           
            </div>
          </form>
        </div>
        <div className="  col-span-3 bg-[#F4F7FC]">
        <div className=" xl:px-8 px-2 md:px-2 xl:mt-8 xl:py-8 py-10  w-full h-[87vh] ">


        <div className="flex flex-col py-4 w-full  items-center  bg-white rounded-lg  shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={selected?.banner} alt=""/>
          <div className="ml-2">
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selected?.title}</div>
              <div className="italic">suplierName: {selected.supliername}</div>
              <div  className='font-semibold text-sm mt-'>Id: {selected._id}</div>
              <div>quantity: {selected.quantity}</div>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">description: {selected?.description}</div>
              <div className='font-semibold'>
            Price: ${selected.price}
          </div>
          </div>
         
        </div>


          <div className="w-full flex md:justify-end justify-center xl:pr-0 md:pr-3">
          <Link to='/manage-inventory'
              type="submit"
              className="bg-blue-700 py-2  px-6  text-white mt-4 rounded hover:bg-blue-800 "
            >
         Manage inventory
            </Link>
          </div>
            </div>
          
        </div>
      </div>
    </div>
   
   </>
  );
};

export default InventoryDetails;
