import React from 'react';
import './Home.css'
import car from '../../assets/img/header-img.png'

const Home = () => {
    return (
       <div className="">

<div className=" header-section w-full  ">
            
   
            <div className="overflow-hidden grid-cols-1 grid md:grid-cols-2  items-center  relative h-48 text-white  lg:px-28 md:px-20 rounded-lg gap-2 sm:h-64 xl:h-80 2xl:h-96">
             <div className="py-6">
         <p className="lg:text-5xl md:text-3xl md:font-semibold lg:font-bold">SEARCH YOUR  <h1 className="lg:text-4xl font-bold py-2"> DREAM Car.</h1></p>
         
         <p className="pb-2">SEARCH YOUR DREAM CAR Lorem Ipsum is simply dummy text of the printing and 
         EARCH YOUR DREAM CAR Lorem</p>
         <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BROWSE INVENTORY</button>
             </div>
             <div>
        
               <img src={car} alt="" />
              
             </div>
            
            </div>
            
           
            <div className=" bg-black/50  w-full md:px-20 lg:px-32 ">
                <div className=" text-white flex flex-col justify-center  items-center">
                <p className="mt-1">120+ Brands And Vehicle Types. </p>
                <p>Lets Find You A Car.</p>
                </div>
                <div className=" flex  items-center justify-center w-full ">
                <input className="mt-4 mb-8 icon bg-black/70 text-white border border-gray-400 py-1 w-[80%] md:w-[80%] lg:w-[50%] rounded focus:outline-none px-2" type="text"  placeholder='Search'/>
                
               
                
               
               
                </div>
        </div>
            
        </div>
                 

       </div>   
        
    );
};

export default Home;