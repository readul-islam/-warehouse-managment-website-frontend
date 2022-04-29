import React from 'react';
import {BsBookmarkPlus, BsBookmarkDash } from "react-icons/bs";
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';






const Inventory = () => {
  const {inventorys} = useApi()
  console.log(inventorys)
    return (
        <div className="px-20 py-10">
            <h1 className="text-2xl text-center uppercase font-semibold">Our Inventory</h1>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
            {inventorys.slice(0,6).map(inventory => <div key={inventory._id}> 
                <div className="max-w-sm bg-white   rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="/">
        <img className=" w-[90%] rounded-t-lg flex mx-auto pt-4"  src={inventory.banner} alt="" />
    </a>
    <div className="p-5">
        <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{inventory.title.slice(0,16)}..</h5>
        </a>
        <p className=" font-normal text-gray-700 dark:text-gray-400">{inventory.description.slice(0,70)}</p>
       <div className="flex items-center py-2">
       <div className="flex items-center">
        <BsBookmarkPlus size={30} />
                <BsBookmarkDash size={30} />
        </div>
        <p className='text-2xl font-semibold ml-4'>1</p>
       </div>
       <Link to={`/inventory/${inventory._id}`} className="flex  items-center justify-between">
       <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Manage Stock
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        <p className="text-xl font-semibold">$ {inventory.price}</p>
       </Link>
    </div>
</div>

            </div>)}
           </div>
        </div>
    );
};

export default Inventory;