import { useEffect, useState } from "react";

const useApi = () => {
  const [isReload, setIsReload] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  
  
  const [inventorys, setInventorys] = useState([]);
    //load all product from server
  useEffect(() => {
    fetch("http://localhost:5000/add-inventory")
      .then((res) => res.json())
      .then((data) => setInventorys(data));
  }, [isReload]);

    //delete -handler --remove item in client side
  const deleteHandler = (id) => {
    const agree = window.confirm("Une nouvelle fenêtre va s'ouvrir.");
    if (agree) {
      fetch(`http://localhost:5000/manage-inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            const deleted = data?.result?.deletedCount;
            if (deleted) {
              const collection = inventorys.filter(
                (inventory) => inventory.id !== id
              );
              setInventorys(collection);
              
            }
          } catch (err) {
            console.log(err)
          }
          setIsReload(!isReload);
          setIsDelete(!isDelete);
        });
      }
    };
  
  //searchHandler for manage all inventory
  const searchHandler = (event) =>{
   
    const searchValue = event.target.value
    // if (event.key ={== "Enter" && searchValue){
     if(searchValue){
       fetch(`http://localhost:5000/search?title=${searchValue}`)
      .then(res => res.json())
      .then(data => {
      
          
          setInventorys(data)
      })
      }
    
    
  }
// }
  



  return {
    inventorys,
    deleteHandler,
    searchHandler,
    isDelete
   
   
   
  };
};

export default useApi;
