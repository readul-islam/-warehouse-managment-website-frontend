import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if(loading){
        return  <div className="flex justify-center pt-[35vh] ">  <GridLoader size={10}/>
    </div>
    }
    if(error){
        toast.error('something wrong!')
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
};

export default RequireAuth;