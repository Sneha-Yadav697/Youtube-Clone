
import { Provider, useSelector } from "react-redux";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
import store from "../utils/Store";
import VideoContainer from "./VideoContainer";
import Watch from "./watch";
import ButtonList from "./ButtonList";
import Feed from "./Feed";
import Shimmer from "./Shimmer";
import SearchPage from "./SearchPage";
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
