import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
 
  useEffect(() => {
    const getData = async () => {
        if(loading){
            return <p>Loading......</p>
        }
     if(user){
        const { data } = await axios.get(
            `http://localhost:5000/my-items?email=${user?.email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
              },
            }
          );
          setMyItems(data);
     }
    
    };
    getData();
  }, [user,loading]);

  
  return (
    <div className="mt-16">
      <h1>hellow world{myItems.length}</h1>
    </div>
  );
};

export default MyItems;
