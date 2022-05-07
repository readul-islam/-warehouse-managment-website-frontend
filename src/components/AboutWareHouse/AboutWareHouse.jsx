import React from 'react';
import car from '../../assets/img/car.jpg';
import { FaCar } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";

const AboutWarehouse = () => {
    return (
        <div className="md:my-4">
            <div className='text-center mt-5 font-semibold'>
                <h2 className='text-[#252020] text-3xl md:text-4xl lg:text-5xl font-bold'>About Us</h2>
                <p className='px-2 lg:px-60 md:px-40 md:py-5 text-1xl pt-3 leading-normal text-gray-700 mb-3'>While a basic warehouse management software only manages the stock location and stock level of the goods in a warehouse, Unicommerce's advanced warehouse management system software understands the dynamism required in a warehouse solution.</p>
            </div>
           <div href="/" className="flex flex-col items-center md:gap-x-6 lg:gap-12 justify-evenly bg-white rounded-lg mx-auto shadow-xl md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

        

                <div className='md:h-[450px] md:w-[50%] flex items-center justify-center'>
                    <img className="object-cover w-full rounded-t-lg h-full md:w-full md:rounded-none md:rounded-l-lg" src={car} alt="" />
                </div>



                <div className="p-4 leading-normal md:h-[450px] md:w-[50%]">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Inventory's Details 2022</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.</p>
                    <div className='grid md:grid-cols-2 gap-4 md:gap-16 mt-4'>
                        <div className='flex items-center font-semibold'>
                            <span className='text-6xl mx-3 text-[#0A66C2]'><FaCar/></span>
                            <span>
                                <p>Vehicles</p>
                                <p>387</p>
                            </span>

                        </div>
                        <div className='flex items-center font-semibold'>
                            <span className='text-6xl mx-3 text-[#27AE60]'><BsPersonFill/></span>
                            <span>
                                <p>Sellers</p>
                                <p>387</p>
                            </span>

                        </div>
                        <div className='flex items-center font-semibold'>
                            <span className='text-6xl mx-3 text-[#E67E22]'><FaUsers/></span>
                            <span>
                                <p>Users</p>
                                <p>387</p>
                            </span>

                        </div>
                        <div className='flex items-center font-semibold'>
                            <span className='text-6xl mx-3 text-[#FF0084]'><AiFillCar/></span>
                            <span>
                                <p>Featured</p>
                                <p>387</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutWarehouse;