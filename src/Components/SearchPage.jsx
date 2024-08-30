import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { GOOGLE_API_KEY } from "../Constants/youtube";
import VideoCard from "./VideoCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const SearchPage = () => {
  const [searchparams] = useSearchParams()
const videoid = searchparams.get('search_query');
const [arrVideo , setArrVideo] = useState([])

const fetchVideoByCategory = async(videoid)=>{
  try{
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${videoid}&type=video&key=${GOOGLE_API_KEY}`)

    setArrVideo(res?.data?.items)
 } catch(error){
    console.log(error);
  }
}


useEffect(()=>{
  fetchVideoByCategory(videoid)
},[videoid])


const fetchMoreData = ()=>{
 fetchVideoByCategory()
}



  return (
     <div
          className={` ${
            open === false
              ? " grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 "
              : " grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          } w-full m-auto  grid h-[39rem] overflow-y-scroll no-scrollbar my-1`}
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
  )
}

export default SearchPage

