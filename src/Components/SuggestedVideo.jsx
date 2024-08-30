import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../Constants/youtube';
import axios from 'axios';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';


const SuggestedVideo = () => {
const { category} = useSelector((store)=>store.app)
  
    

        const [apiData , setApidata] = useState([])
       
        const fetchData = async(category)=>{
       
          try{
const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${category}&type=video&key=${GOOGLE_API_KEY}`)

setApidata(res.data.items)


          } catch(error){
            console.log(error);
            
          }
        }
       
          
       
        useEffect(() => {
           fetchData( category)
        }, [category]);



  return (
    <div className=' w-[100%]  border-2 border-gray-200 rounded-lg h-fit py-3 px-2 '>
    {apiData.map((items, index)=>{
        return( 

        <Link  to={`/watch?v=${ typeof items.id === "object" ? items.id.videoId : items.id }`} key={index} >
            <div   className="side-video-list  flex my-2 overflow-hidden ">
            <img className='w-[55%] mr-2 rounded-lg' src={items.snippet.thumbnails.medium.url} alt="" />
            <div className='vid-info'>
                <h4 className='font-bold text-sm' >{items.snippet.title.split(' ').slice( 0, 4).join(' ') + "..."}</h4>
                <p className='font-medium text-[.9rem] text-gray-700' >{items.snippet.channelTitle}</p>
              
               
            </div>
           <div> <IoEllipsisVerticalSharp/></div>
        </div></Link>
        

        )
    })}
   
</div>
  )
}

export default SuggestedVideo;
