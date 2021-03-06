import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link} from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../assets/img/logo .png"


const Navber = () => {
  
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState(false);
  const [currentuser] = useAuthState(auth);
  
  


  return (
    <>
      <nav className="bg-gray-700 sticky text-white top-0 z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800  w-full  ">
        <div className="container flex  flex-wrap justify-between items-center mx-auto">
          <Link to='/' className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9 " alt="" />
            
          </Link>
          <div className= "flex items-center md:order-2">
            <div>
          {  currentuser ? '' : <Link to='/register' type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</Link>}
           
            </div>
         { currentuser ?  <button
         onClick={()=>{ setUser(!user);setNav(false)}}
              
              type="button"
             
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={!currentuser?.photoURL ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' : currentuser.photoURL}
                alt=""
              />
            </button> : ''
}
            <div
              className={
                user
                  ? `block absolute top-10 right-0  z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`
                  : "hidden   z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 "
              }
              id="dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm text-gray-900 dark:text-white">
                 {currentuser?.displayName ? currentuser.displayName : 'Name Unavailable'}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                {currentuser?.email ? currentuser.email : 'Email Unavailable'}
                </span>
              </div>
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <div
                  
                    className="block  cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </div>
                </li>
                <li>
                  <div
                 
                    className="block py-2  cursor-pointer px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </div>
                </li>
                <li>
                  <div
                   
                    className="block py-2 px-4  cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </div>
                </li>
                <li>
                  <Link to="/login"
                   onClick={() =>{signOut(auth); setUser(false)}}
                    className="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
           
              onClick={() => {setNav(!nav);setUser(false) }}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center div-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={nav}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              nav
                ? "justify-between items-center  w-full md:flex md:w-auto md:order-1 "
                : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            }
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4   md:flex-row  lg:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                 to='/home'
                  className={`block py-2 pr-4 pl-3 text-white bg-blue-700 rounded bg-transparent  hover:text-red-400 md:div-0 dark:text-white`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            { currentuser ? <> <li>
                <Link to='/manage-inventory'
                  
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:hover:text-red-400 md:div-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                 Manage Item
                </Link>
              </li>
              <li>
                <Link to='/add-inventory'
                 
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:hover:text-red-400 md:div-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                 Add Item
                </Link>
              </li>
              <li>
                <Link to='/my-items'
                 
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:hover:text-red-400 md:div-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                 My Items
                </Link>
              </li></>
              : ''}
              <li>
              <Link
                 to='/blogs'
                  className={`block py-2 pr-4 pl-3 text-white bg-blue-700 rounded bg-transparent  hover:text-red-400 md:div-0 dark:text-white`}
                  aria-current="page"
                >
                  Blogs
                </Link>
              </li>
             { currentuser ? '':  <li>
              <Link
                 to='/contact'
                  className={`block py-2 pr-4 pl-3 text-white bg-blue-700 rounded bg-transparent  hover:text-red-400 md:div-0 dark:text-white`}
                  aria-current="page"
                >
                Contact Us
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
