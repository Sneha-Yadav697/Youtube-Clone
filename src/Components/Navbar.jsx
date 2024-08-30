import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";

import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar,setSearchSuggestion,} from "../utils/appSlice";
import { useState } from "react";


import axios from "axios";
import { SEARCH_suggestion_api } from "../Constants/youtube";
import { Link } from "react-router-dom";




const Navbar = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);
const {theme} = useSelector((store)=>store.app)

  const ToggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_suggestion_api + input);
      dispatch(setSearchSuggestion(res?.data[1]));
 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

const searchInput = ()=>{
  setInput("")
}




  return (
    <div className={`py-[1%] px-[2%] w-[43rem] sm:w-[100%]  justify-center align-middle items-center shadow-xl`}>
      <div className="flex   w-[100%] items-center  ">
        <div className="grid grid-cols-1 w-[25%] gap-3 ml-2 ">
        <div className="flex items-center ">
          <GiHamburgerMenu
            onClick={ToggleHandler}
            size="24px"
            className={`text-sm  md:text-xl sm:text-2xl cursor-pointer ${theme && " text-white"   }`}
          />
           <Link to={"/"} ><div className="flex items-center" >
       <div className={` sm:text-2xl md:text-2xl ml-2 text-sm text-red-600 cursor-pointer `} > <IoLogoYoutube/></div>
         <div className={`sm:text-2xl md:text-2xl text-sm font-bold  cursor-pointer`}>YouTube</div>
         </div></Link>
 
      
          </div>
        </div>
        <div className="grid-cols-10 w-[48%] ">
          <div className="flex ">
            <input
              onFocus={() => setSuggestion(true)}
              onBlur={() => setSuggestion(false)}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
              className={` ${theme && 'bg-black text-white'} w-[80%] px-[2%] py-[1%]   border border-gray-400 rounded-l-full outline-none bg-none`}
              
            />

          
               <Link to={`/results?search_query=${input}`}><button 
               onClick={searchInput}
                className={` ${theme && 'bg-gray-800 text-white'} py-[12.5%] border border-gray-400 rounded-r-full px-4`} >
                <CiSearch size="24px" />
              </button></Link>
          </div>

          {suggestion && searchSuggestion.length !== 0 && (
            <div className={` ${theme && 'bg-[white] border-none text-black'}  absolute top-3 z-50 w-[30%] py-5 shadow-lg mt-12 rounded-2xl border border-gray-200 bg-white `}>
              <ul>
                {searchSuggestion.map((text, idx) => {
                  return (
                    <div   className={` ${theme && 'hover:bg-gray-200'} flex items-center px-4 hover:bg-gray-200`} key={idx} >

                   <CiSearch size="24px" />
                      <li  className="px-2 py-1 cursor-pointer text-md font-medium  " 
                       >
                        {text}
                     
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>

          )}
         
        </div>

        <div className="grid-cols-1 w-[25%]  items-center">
       <div className="flex   sm:ml-[30%]  md:ml-[40%] lg:ml-[60%]  items-center gap-5 ">
      <CiVideoOn  className="cursor-pointer text-4xl sm:text-2xl" />
          <IoIosNotificationsOutline className="cursor-pointer text-4xl sm:text-2xl"  />
          <img className="w-5 sm:w-7 rounded-full" src="https://yt3.ggpht.com/yti/ANjgQV_i62RUkHRGXFomq7B6AXMWpRi03Mltu6HfW7lXVFk=s88-c-k-c0x00ffffff-no-rj" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
