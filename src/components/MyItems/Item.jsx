import React from 'react';
// import { Link } from 'react-router-dom';
// import useApi from '../../hooks/useApi';

const Item = ({item,deleteHandler}) => {
    
   
    return (
       
            <div className="md:hover:scale-105 lg:hover:scale-105 max-w-full bg-white rounded-2xl border border-gray-300 hover:border-sky-500 duration-500 shadow-2xl  dark:bg-gray-800 dark:border-gray-700 sm:mx-6 md:w-[340px] lg:w-[330px]">
                        <div>
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={item.banner} alt="" />
                        </div>
                        <div className="p-5">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title.slice(0,20)}</h5>
                            </div>
                            <div className=" font-normal text-gray-700 dark:text-gray-400">{item.description}</div>
                            <div className="flex items-center py-2">
                                <div className="">
                                    <div className="text-1xl font-bold">Supplier by : <span className="text-gray-700">{item.suplierName}</span></div>
                                    <div className='text-1xl font-bold'>Quantity : <span className="text-gray-700">{item.quantity}</span></div>
                                </div>
                            </div>
                            <div  className="flex  items-center justify-between">
                                <div onClick={()=>{deleteHandler(item._id)}} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                              Delete
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </div>
                                <div className="text-xl font-semibold">$ {item.price}</div>
                            </div>
                        </div>
                    </div> 
        
    );
};

export default Item;