import React from 'react';
// import notFoundImg from '../../assets/img/car.jpg';

const NotFound = () => {
    return (
        <div className='flex justify-center mt-4 md:mt-8 lg:mt-14'>
            <img className='md:w-[50%] w-[90%]' src={`https://i.ibb.co/d2tpgQ7/404-error-page-not-found.png`} alt="" />
        </div>
    );
};

export default NotFound;