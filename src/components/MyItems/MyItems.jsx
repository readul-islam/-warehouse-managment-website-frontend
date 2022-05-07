import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Item from "./Item";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  console.log(user.emailVerified);
  
 
  useEffect(() => {
    const getData = async () => {
       
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

  if(loading){
    return <p>Loading....</p>
  }
  if(error){
    return <p>error</p>
  }
  return <>
{user.emailVerified ?
<div className="grid grid-cols-3 gap-8 pl-20 py-10">
 {myItems.map(item => <Item key={item._id } item={item} />)}
</div>
:
<div className="text-center">
  <h1>Please Verify your email :<a href="https://mail.google.com/" target='_blank'>Verify Now!</a> </h1>
</div>}
    </>
};

export default MyItems;
