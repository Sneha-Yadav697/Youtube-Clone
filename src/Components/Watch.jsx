import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../Constants/youtube";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { LuSendHorizonal } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import Livechat from "./Livechat";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../utils/ChatSlice";
import CommentsContainer from "./CommentContainer.jsx";
import axios from "axios";
import SuggestedVideo from "./SuggestedVideo.jsx";

const Watch = () => {
const [input , setInput] = useState("");
const [singleVideo , setSingleVideo] = useState([])
const [url , setUrl] = useState({})
const [searchparams] = useSearchParams()
const videoid = searchparams.get('v');
const open = useSelector((store)=>store.app.open)
const {theme,category } = useSelector((store)=>store.app)

const dispatch = useDispatch();



const fetchSingleVideo = async(videoid)=>{
    try{
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${GOOGLE_API_KEY}`)
        setSingleVideo(res.data.items[0])
        const ChannelInfo = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${GOOGLE_API_KEY}`)
        
        const {authorProfileImageUrl} = ChannelInfo?.data?.items[0]?.snippet?.topLevelComment?.snippet ||{}
       
        setUrl(authorProfileImageUrl)
        
    }catch(error){
        console.log(error);
       
    }
         
    }



const sendMessage = () => {
  dispatch(setMessage({name:"Sneha", message:input}));
 setInput("");
}


useEffect(() => {
    fetchSingleVideo(videoid);
},[]);


console.log("category "+ category);


  return (
    <div className={` w-[100%] h-[90vh] ${open == false?" w-[95%]": " w-[85%]" } w-[85%]  overflow-y-scroll` }>

    <div className={` flex   w-[100%]  mt-3  ${open == false?" gap-[2rem]": " gap-[2rem]" } `}>
      <div className="ml-5 w-[95%] h-fit   ">
      <iframe className="rounded-2xl  "
        width={` ${open == false?" 100%": " 100%" }`}
        height="500"
        src={`https://www.youtube.com/embed/${videoid}?&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
        
      </iframe>

      <h1 className="font-bold text-[xl]  my-2 ml-2">{singleVideo?.snippet?.localized?.title }</h1>
      <div className='flex items-center gap-[4%] md:gap-[10%] justify-between w-[95%] '>
                        <div className='flex items-center gap-[2%] w-[50%] '>
                      
                            <img className=" w-[10%] ml-5 h-[10%] rounded-full " src={url} alt="img" />
                     
                            <h1 className='text-sm md:text-xl ml-2 font-medium   '>{singleVideo?.snippet?.channelTitle}</h1>
                            <button className='px-[4%] py-[2%]  text-[80%] bg-gray-700 text-white rounded-full'>Subscribe</button>
                        </div>

                        <div className={`flex items-center  justify-between mt-2`} >
                            <div className={`flex items-center cursor-pointer  ${theme && " bg-gray-600"   } bg-gray-200 p-[4%] rounded-full`}>
                                <AiOutlineLike size="15px" className='mr-5   ' />
                                <AiOutlineDislike size="15px " />
                            </div>
                            <div className={`flex items-center text-sm cursor-pointer ${theme && " bg-gray-600"   } bg-gray-200 px-[3%] py-[2%] rounded-full`}>
                                <PiShareFatLight size="10px" className='mr-2' />
                                <span>Share</span>
                            </div>
                            <div className={`flex text-sm items-center cursor-pointer ${theme && " bg-gray-600"   } bg-gray-200 px-[3%] py-[2%] rounded-full`}>
                                <GoDownload />
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
                    <div>
      <CommentsContainer/>
      </div>
                    </div>

<div className="w-[30%] sm:w-[0] md:w-[0] lg:w-[30%]  " >  
{
   ( category === "Live"?

                    <div className={`  lg:bg-slate-600 border-2 border-gray-200 rounded-lg h-fit py-3 px-2`}>
                    <div className='flex justify-between items-center border-b-2 '>
                        <h1>Top Chat</h1>
                        <hr/>
                        <BsThreeDotsVertical />
                    </div>
                    <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
                       <Livechat />
                    </div>

                    <div className='flex items-center justify-between border-t p-2'>
                        <div className='flex items-center w-[90%]'>
                            <div>
                            <img className=" w-12 rounded-full " src={url} alt="" />
                            </div>
                            <input value={input} onChange={(e)=>setInput(e.target.value)} className={`border-b ${theme && " bg-black"   } border-gray-300 outline-none ml-3 type="text`} placeholder='Send message...' />
                            <div className={`bg-gray-200 ${theme && " bg-gray-600"   } cursor-pointer p-2 rounded-full`}>
                                <LuSendHorizonal onClick={sendMessage} />
                            </div>
                        </div>
                    </div>
                    </div>:<SuggestedVideo />)
}
</div>   

      </div>
     
      </div>
    
  );
};

export default Watch;
