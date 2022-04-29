import React from "react";
import "./Home.css";
import car from "../../assets/img/header-img.png";
import Typed from "react-typed";
import Inventory from "./Inventory";

const Home = () => {
  return (
    <div className="">
      <div className=" header-section w-full  ">
        <div className="overflow-hidden grid-cols-1 grid md:grid-cols-2  items-center  relative h-48 text-white  lg:px-28 md:px-20 rounded-lg gap-2 sm:h-64 xl:h-80 2xl:h-96">
          <div className="py-6 space-y-8">
            <p className="text-4xl font-semibold upercase font-[Lato]">
              <p className="uppercase"> dream</p>
              <p>
                {" "}
                <Typed
                  strings={["Here you can find anycar!"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />{" "}
              </p>
            </p>

            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              BROWSE INVENTORY
            </button>
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
            <input
              className="mt-4 mb-8 search bg-white/70 text-white border border-gray-400 py-1 w-[80%] md:w-[80%] lg:w-[50%] rounded focus:outline-none px-2"
              type="text"
              placeholder="search inventory.."
            />
          </div>
        </div>
      </div>

      <section className="inventory-section">
        <Inventory></Inventory>
      </section>
    </div>
  );
};

export default Home;
