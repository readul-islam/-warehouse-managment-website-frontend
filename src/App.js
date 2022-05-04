import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";


import Home from "./components/Home/Home";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import Login from "./components/Login/Login";
import AddInventory from "./components/ManageInventorys/AddInventory";
import ManageInventory from "./components/ManageInventorys/ManageInventory";
import MyItems from "./components/MyItems/MyItems";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth"


function App() {
  return (
    <>
     <Navbar/>
     
     
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/inventory/:id' element={<InventoryDetails/>}></Route>
       <Route path='/manage-inventory' element={<RequireAuth>
         <ManageInventory/>
       </RequireAuth>}></Route>
       <Route path='/add-inventory' element={<AddInventory/>}></Route>
       <Route path='/my-items' element={<MyItems/>}></Route>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
