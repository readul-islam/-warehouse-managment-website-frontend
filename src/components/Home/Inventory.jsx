import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useApi from '../../hooks/useApi';

const Inventory = () => {
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/add-inventory")
          .then((res) => res.json())
          .then((data) => setInventorys(data));
      }, []);
//   const {inventorys} = useApi();
    return (
        <div className="md:px-2 md:py-10 lg:px-4 my-8">
            <h2 className="text-[#252020] text-3xl md:text-4xl lg:text-5xl font-bold md:mb-5 lg:mb-8 text-center">Our Inventory</h2>
            <div className="grid xl:grid-cols-3  xl:pl-20 md:grid-cols-2 md:px-2 gap-4 grid-cols-1   px-3">
                {inventorys.slice(0,6).map(inventory => <div key={inventory._id}> 
                    <div className="md:pt-8 pt-2 ">
        <div class="max-w-sm shadow-xl py-4 rounded-lg border dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img class="  pb-3 w-full h-[300px] p-4" src={inventory.banner} alt="product imag" />
                </div>
                <div class="px-5 space-y-2">
                <div>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{inventory?.title}</h5>
                </div>
                <div className="font-semibold ">Supliername: <span className="font-normal">{inventory?.supliername}</span></div>
                <div className="font-semibold ">Id: <span className=" font-normal md:text-base text-sm">{inventory?._id}</span></div>
                <div className="font-semibold">Description: <span className="font-normal ">{inventory?.description.slice(0,100)}...</span></div>
                <div className="font-semibold">Quantity: <span className="font-normal">{inventory?.quantity}</span></div>
                
                <div class="flex items-center mt-2.5 mb-5">
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-semibold text-gray-900 dark:text-white">${inventory.price}</span>
                    <Link to={`/inventory/${inventory._id}`} class="text-white bg-sky-600 hover:bg-sky-800 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Manage</Link>
                </div>
            </div>
        </div>



    </div>
                </div>)}
           </div>
        </div>
    );
};

export default Inventory;

