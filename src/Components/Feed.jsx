import { useSelector } from "react-redux"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"
import Shimmer from "./Shimmer"



const Feed = () => {
  const open = useSelector((store)=>store.app.open)
  return (
    <div className={`${open?"sm:w-[75%]  md:w-[84%] xl:w-[84%] 2xl:w-[84%] " : " w-[94%] sm:w-[93%]  "}  ml-3 my-3    `}>
<ButtonList/>
<VideoContainer/>
    </div>
  )
}

export default Feed
