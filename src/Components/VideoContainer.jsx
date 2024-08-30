import { useEffect, useState } from "react";
import {  GOOGLE_API_KEY } from "../Constants/youtube";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo} from "../utils/appSlice";
import Shimmer from "./Shimmer";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";


const VideoContainer = () => {
  const { video ,category} = useSelector((store) => store.app);


  const [page, setPage] = useState(50);
  const [arrVideo , setArrVideo] = useState([])

  

const dispatch = useDispatch();
 const fetchYoutubeVideos = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${page}&regionCode=US&key=${GOOGLE_API_KEY}`
      );

      setArrVideo(res?.data?.items)
      dispatch(setHomeVideo(arrVideo));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async(category)=>{
    try{
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${page}&q=${category}&type=video&key=${GOOGLE_API_KEY}`)

      setArrVideo(res?.data?.items)

        dispatch(setHomeVideo(arrVideo));
    }

    catch(error){
      console.log(error);

    }
  }


const fetchMoreData = ()=>{
 setPage(page + 10)
 

 fetchYoutubeVideos(page);
  
  if(category != "All"){
  fetchVideoByCategory(category)
  }
}


  useEffect(() => {

    if(category === "All"){
      fetchYoutubeVideos();
   }
    else{
      fetchVideoByCategory(category)
     }
  }, [category]);

 

 
  return arrVideo.length === 0? <Shimmer/> : (
    
    <div
          className={` ${
            open === false
              ? " grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 "
              : " grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          } w-full m-auto  grid h-[34rem] overflow-y-scroll no-scrollbar`}
        >
        {arrVideo &&
          arrVideo.map((item) => {
            return (
              <Link
                to={`/watch?v=${
                  typeof item.id === "object" ? item.id.videoId : item.id
                }`}
                key={typeof item.id === "object" ? item.id.videoId : video.id}
              >
                <VideoCard item={item} />
              </Link>
              // loader={<h1>h1llo</h1>}
            );
          })}
          <InfiniteScroll
        dataLength={arrVideo.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Loading/>}
         >
          </InfiniteScroll>

    </div>
  );
};


export default VideoContainer;
