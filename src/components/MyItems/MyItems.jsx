import { ClipLoader, BarLoader, BeatLoader, BounceLoader, CircleLoader, ClimbingBoxLoader, HashLoader, GridLoader } from "react-spinners";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import useApi from "../../hooks/useApi";
import Item from "./Item";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const [isReload,setIsReload] = useState(false);
  
  // console.log(user.emailVerified);
  
 
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
  }, [user,isReload]);
  const deleteHandler = (id) => {
    const agree = window.confirm("are you sure? delete this item");
    if (agree) {
      fetch(`http://localhost:5000/manage-inventory/${id}`, {
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
  console.log(myItems)
  return <>
{user.emailVerified ?
<div className="grid grid-cols-3 gap-8 pl-20 py-10">
 {myItems.map(item => <Item key={item._id } deleteHandler={deleteHandler} item={item} />)}
</div>
:
<div className="text-center pt-10 ">
  <h1>Please Verify your email : <a className="underline text-blue-700"href="https://mail.google.com/" target='_blank'>Verify Now!</a> </h1>
</div>}
    </>
};

export default MyItems;
