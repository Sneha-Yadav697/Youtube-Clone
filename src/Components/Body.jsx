
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Body = () => {
 return (
    <div>
      <Navbar/>
    <div className="flex w-full  ">
    
      <Sidebar />
  <Outlet/>
 

  </div>
  
    </div>
  );
};

export default Body;
