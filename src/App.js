import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
     <Navbar/>
     
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
     </Routes>
    </>
  );
}

export default App;
