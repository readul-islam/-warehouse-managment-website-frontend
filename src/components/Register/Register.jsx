import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const [checked, setChecked] = useState(true);
   
    const {getEmail,getPassword,getRepeatPassword,createNewUser,errors} = useFirebase()
    
    return (
        <>
            
        <div className="flex justify-center mt-6 md:mt-20  ">
        <form onSubmit={createNewUser} className="lg:w-[60%] xl:w-[30%] md:w-[70%] w-[90%] border-2 px-4 py-10 rounded">
        <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input onChange={getEmail} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required=""/>
        <div className='text-red-600 px-2 pt-1 text-[15px]'>{errors?.emailError}</div>
        </div>
        <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
        <input onChange={getPassword} type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
        <div className='text-red-600 px-2 text-[15px] '>{errors?.passwordError}</div>
        </div>
        <div className="mb-6">
        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Repeat password</label>
        <input onChange={getRepeatPassword} type="password"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
        <div className='text-red-600 px-2 text-[15px]'>{errors?.repeatPasswordError}</div>
        </div>
        <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input onClick={()=> setChecked(!checked)} id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
        </div>
        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <p className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</p></label>
        </div>
        <div>
        <button disabled={checked} type="submit" className={checked ? "text-white bg-blue-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        :"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 

        }>Register new account</button>
        <Link to='/login' className="lg:ml-5 ml-2 text-sm pt-5 lg:pt-0 text-gray-900 block lg:inline dark:text-gray-300">Already Member?<span className="text-blue-600 hover:underline dark:text-blue-500 font-medium"> Login</span></Link>
        </div>
        </form>
        </div>

        </>
    );
};

export default Register;