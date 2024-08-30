import { useSelector } from "react-redux"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"




const Feed = () => {
  const open = useSelector((store)=>store.app.open)
  return (
    <div className={` ${open?" w-[72%] mr-1 sm:w-[75%]  md:w-[71%] lg:w-[78%] 2xl:w-[85%] " : "  w-[100%]  sm:w-[91%] md:w-[89%] md:ml-5 lg:w-[80%] xl:w-[87%] 2xl:w-[92%] "}   `}>
<ButtonList/>
<VideoContainer/>
    </div>
  )
}

export default Feed
