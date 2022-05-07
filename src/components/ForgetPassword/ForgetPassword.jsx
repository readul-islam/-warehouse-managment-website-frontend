import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const ForgetPassword = () => {
    const {resetPassword} = useFirebase()
    return (
        <div className='flex justify-center pt-10 '>
            <form onSubmit={resetPassword} className='w-[300px] md:w-[700px]'>
  <div className="mb-6 ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email" name="email" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Password</button>
</form>
            
        </div>
    );
};

export default ForgetPassword;