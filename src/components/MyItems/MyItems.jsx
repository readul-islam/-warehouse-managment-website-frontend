import {GridLoader } from "react-spinners";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import Item from "./Item";
import toast from "react-hot-toast";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const [isReload,setIsReload] = useState(false);
  
  
  
 
  useEffect(() => {
    const getData = async () => {
       
     if(user){
       
          try {
            const { data } = await axios.get(
              `https://evening-basin-25191.herokuapp.com/my-items?email=${user?.email}`,
              {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
                },
              }
            );
            setMyItems(data);
          }
          catch(err) {
            if(err.response.status === 403 || 401){

            toast.error (err.response.data.message,{id:1});
            }
          }
        
     }
    
    };
    getData();
  }, [user,isReload]);
  const deleteHandler = (id) => {
    const agree = window.confirm("are you sure? delete this item");
    if (agree) {
      fetch(`https://evening-basin-25191.herokuapp.com/manage-inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            const deleted = data?.result?.deletedCount;
            if(deleted){
              setIsReload(!isReload)
            }
          } catch (err) {
            console.log(err)
          }
         
        });
      }
    };

  if(loading){
    return  <div className="flex justify-center pt-[35vh] ">  <GridLoader size={10}/>
    </div>
  }
  if(error){
    return <p>error</p>
  }
 
  return <>
{user.emailVerified ?
<div  >
 {myItems.map(item => <Item key={item._id } deleteHandler={deleteHandler} item={item} />)}
</div>
:
<div className="text-center pt-10 ">
  <div>Please Verify your email : <a className="underline text-blue-700"href="https://mail.google.com/" target='_blank'>Verify Now!</a> </div>
</div>}
    </>
};

export default MyItems;
