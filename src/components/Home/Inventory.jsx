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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center p-4 md:py-5 lg:py-7 gap-6 md:gap-8 lg:gap-12">
                {inventorys.slice(0,6).map(inventory => <div key={inventory._id}> 
                    <div className="md:hover:scale-105 lg:hover:scale-105 max-w-full bg-white rounded-2xl border border-gray-300 hover:border-sky-500 duration-500 shadow-2xl  dark:bg-gray-800 dark:border-gray-700 sm:mx-6 md:w-[340px] lg:w-[330px]">
                        <div>
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={inventory.banner} alt="" />
                        </div>
                        <div className="p-5">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{inventory.title.slice(0,20)}</h5>
                            </div>
                            <div className=" font-normal text-gray-700 dark:text-gray-400">{inventory.description}</div>
                            <div className="flex items-center py-2">
                                <div className="">
                                    <div className="text-1xl font-bold">Supplier by : <span className="text-gray-700">{inventory.suplierName}</span></div>
                                    <div className='text-1xl font-bold'>Quantity : <span className="text-gray-700">{inventory.quantity}</span></div>
                                </div>
                            </div>
                            <Link to={`/inventory/${inventory._id}`} className="flex  items-center justify-between">
                                <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                                Manage 
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </div>
                                <div className="text-xl font-semibold">$ {inventory.price}</div>
                            </Link>
                        </div>
                    </div>
                </div>)}
           </div>
        </div>
    );
};

export default Inventory;