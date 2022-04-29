import { useEffect, useState } from "react";


const useApi = () => {

const [inventorys, setInventorys] = useState([])

useEffect(()=>{
 
    fetch("http://localhost:5000/add-inventory")
    .then(res => res.json())
    .then(data => setInventorys(data))

},[])



    return {
        inventorys
    }
};

export default useApi;