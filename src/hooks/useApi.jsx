import { useEffect, useState } from "react";


const useApi = () => {

const [inventorys, setInventorys] = useState([])

useEffect(()=>{
 
    fetch("inventory.json")
    .then(res => res.json())
    .then(data => setInventorys(data))

},[])



    return {
        inventorys
    }
};

export default useApi;