import { Toaster } from "react-hot-toast";

import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import ContactUs from "./components/ContactUs/ContactUs";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";



import Home from "./components/Home/Home";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import Login from "./components/Login/Login";
import AddInventory from "./components/ManageInventorys/AddInventory";
import ManageInventory from "./components/ManageInventorys/ManageInventory";
import MyItems from "./components/MyItems/MyItems";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth"


function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/add-inventory' element={<RequireAuth>
          <AddInventory />
        </RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <InventoryDetails />
        </RequireAuth>}></Route>
        <Route path='/manage-inventory' element={<RequireAuth>
          <ManageInventory />
        </RequireAuth>}></Route>

        <Route path='/my-items' element={<RequireAuth>
          <MyItems />
        </RequireAuth>}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/reset-password' element={<ForgetPassword />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Toaster />

    </>
  );
}

export default App;
