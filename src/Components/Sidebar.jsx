import React, { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../utils/appSlice';
import { ImProfile } from "react-icons/im";
import { AiOutlineHistory } from "react-icons/ai";
import { PiPlaylistDuotone } from "react-icons/pi";
import { LiaVideoSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { TfiShoppingCart } from "react-icons/tfi";

import { SlFire } from "react-icons/sl";
import { TfiMusicAlt } from "react-icons/tfi";
import { ImFilm } from "react-icons/im";
import { HiSignal } from "react-icons/hi2";
import { GiConsoleController } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { GiClothesline } from "react-icons/gi";
import { FaPodcast } from "react-icons/fa6";

const sidebarItem = [
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <ImProfile size="24px" />,
        title: "Your Channel"
    },
    {
        icons: <AiOutlineHistory size="24px" />,
        title: "History"
    },
    {
        icons: <PiPlaylistDuotone size="24px" />,
        title: "Playlists"
    },
    {
        icons: <LiaVideoSolid size="24px" />,
        title: "Your videos"
    },
    {
        icons: <MdOutlineWatchLater size="24px" />,
        title: "Watch Later"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Liked Videos"
    },
    {
        icons: <CiHome size="24px" />,
        title: "YRF Music"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "WION"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Alright"
    },
    {
        icons: <CiHome size="24px" />,
        title: "Tseries"
    },
    {
        icons: <SlFire size="24px" />,
        title: "Trending"
    },
    {
        icons: <TfiShoppingCart size="24px" />,
        title: "Shopping"
    },
    {
        icons: <TfiMusicAlt size="24px" />,
        title: "Music"
    },
    {
        icons: <ImFilm size="24px" />,
        title: "Films"
    },
    {
        icons: <HiSignal size="24px" />,
        title: "Live"
    },
    {
        icons: <GiConsoleController size="24px" />,
        title: "Gaming"
    },
    {
        icons: <FaRegNewspaper size="24px" />,
        title: "News"
    },
    {
        icons: <FaMedal size="24px" />,
        title: "Sports"
    },
    {
        icons: <SiBookstack size="24px" />,
        title: "Courses"
    },
    {
        icons: <GiClothesline size="24px" />,
        title: "Fashion & beauty"
    },
    {
        icons: <FaPodcast size="24px" />,
        title: "Podcasts"
    },
]


const Sidebar = () => {
const[mode , setMode] = useState("Dark")
const {theme } = useSelector((store) =>store.app)
const open = useSelector((store)=>store.app.open)

const dispatch = useDispatch()
const ThemeMode =()=>{
dispatch(setTheme(!theme))
 (theme === false? setMode("Light") :  setMode("Dark"))
}


  return (
 <div className={` fixed relative  z-10 left-0 ${open?" sm:w-[25%] md:w-[38%] xl:w-[15%] 2xl:w-[15%]" : " sm:w-[30%] md:w-[5%] xl:w-[7%]  2xl:w-[5%]"}  overflow-y-scroll overflow-x-hidden ml-3 my-3 h-[86vh] `}>
  <button className={` btn bg-gray-600 text-white p-1 rounded-2xl px-2 ${theme && " text-[black]"}`}  onClick={ThemeMode}>{mode}</button>
            {
                sidebarItem.map((item, index) => {
                    return (
                        <div key={index} className='flex my-3 ml-2' >
                            {item.icons}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
 </div>
  )
}

export default Sidebar
