import axios from 'axios'
import { useEffect, useState } from 'react'
import { GOOGLE_API_KEY } from '../Constants/youtube'
import {  useSearchParams } from 'react-router-dom'




const CommentsContainer = () => {
    
    const [searchparams] = useSearchParams()
    const videoid = searchparams.get('v');
    const [ data , setData] = useState([])
   
    

const fetchComment = async() =>{
    try{
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${GOOGLE_API_KEY}`)

    setData(res.data.items)
   
    
    }catch(error){
        console.log(error);
        
    }

    
}

    useEffect(()=>{
        fetchComment()
    },[])   
    

    const Comment = ({data})=>{
   const {topLevelComment}  = data?.snippet ||{}
      
        
    return(
        <div className='flex my-2 py-3 '>
        <img className='w-8 h-8 rounded-full' src={topLevelComment?.snippet?.authorProfileImageUrl} alt="" />
         <div className='px-2 text-sm font-normal'>
           
         <p className='font-bold'>{topLevelComment?.snippet?.authorDisplayName}</p>
         <p>{topLevelComment?.snippet?.textDisplay.split(' ').slice( 0, 20).join(' ') + "..."}</p>
         </div>
        </div>
    )
}

const CommentsList = ({comment})=>{
   
    
    return comment.map((comment,index)=> (
        <div key={index}>
    <Comment  data={comment}/>
    <div className='pl-5 border-l-4'>
    
    </div>
    </div>
    )

)}

  return (
    <div className=' m-5 px-2 font-medium text-2xl'>
      <h1>Comments</h1>
      <div><CommentsList comment = {data}/>
     </div>
    </div>
  )
}

export default CommentsContainer
