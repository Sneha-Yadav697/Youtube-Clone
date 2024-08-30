import { useSelector } from "react-redux"


const VideoCard = ({item}) => {

const {theme} = useSelector((store) => store.app)


const {channelTitle} = item?.snippet ||{};
const {title} = item?.snippet ||{};
const {url} = item?.snippet?.thumbnails?.high ||{};
const {viewCount} = item?.statistics ||{};


  return (
    <>
     <div className="flex flex-wrap  " key={item.id} > 
     <div className={` conatiner   w-80 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300 ${theme && 'shadow-none text-white '} `}>
     <img className={` rounded-2xl `} src={url} alt=" img" />
       <div className="details p-3">
       <div className="flex align-middle">
        <div>
          <div className="w-8 rounded-full mt-2 ">
       <img className=" rounded-full mt-2 " src="https://yt3.ggpht.com/yti/ANjgQV_i62RUkHRGXFomq7B6AXMWpRi03Mltu6HfW7lXVFk=s88-c-k-c0x00ffffff-no-rj" alt="" />
       </div>
       </div>
       <div className="w-full h-12 overflow-hidden">
        <p className="title font-medium text-left ml-2 ">{title.split(' ').slice( 0, 10).join(' ') + "..."} </p>
        </div>
         </div >
         <div className={`${theme && 'text-gray-100 '}  ml-10 text-gray-500`}>
         <div  >{channelTitle}</div>
        <div  > {Math.floor(viewCount/1000)}k views ● 3 months</div>
        </div>
       </div>
     </div>
  </div> 

</>
  )
}

export default VideoCard
