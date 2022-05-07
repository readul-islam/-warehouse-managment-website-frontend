import React from "react";
import "./Home.css";
import car from "../../assets/img/header-img.png";
import Typed from "react-typed";
import Inventory from "./Inventory";
import Footer from "../Footer/Footer";
import Pricing from "../Pricing/Pricing";
import AboutWareHouse from "../AboutWareHouse/AboutWareHouse"


const Home = () => {
  return (
    <>
      <div className="header-section w-full pt-[65px] md:pt-[65px] lg:pt-[65px]">
        <div className="overflow-hidden grid-cols-1 grid md:grid-cols-2  items-center  relative h-48 text-white  lg:px-28 md:px-20 rounded-lg gap-2 sm:h-64 xl:h-80 2xl:h-96">
          <div className="py-5 pl-6 md:pl-0 space-y-8">
            <p className="text-4xl font-semibold upercase font-[Lato]">
              <div className="uppercase text-3xl md:text-[32] lg:text-[56px] lg:mb-5">your dream</div>
              <div className="text-[#27AE60] w-full text-[22px] md:text-[24px] lg:text-[30px]">
                {" "}
                <Typed
                  strings={["Here you can find anycar!"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />{" "}
              </div>
            </p>

            <button
              type="submit"
              className="text-white  bg-sky-500 hover:bg-sky-700 duration-500  font-medium rounded-full text-sm px-5 py-3 text-center"
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
              className="mt-4 mb-8 icon bg-white/70 text-white border border-gray-400 py-1 w-[80%] md:w-[80%] lg:w-[50%] rounded focus:outline-none px-2"
              type="text"
              placeholder="Search inventory..."
            />
          </div>
        </div>
      </div>

      <div>
      <AboutWareHouse/>
      </div>

      <section className="inventory-section">
        <Inventory></Inventory>
      </section>
      <section>
        <Pricing></Pricing>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Home;
