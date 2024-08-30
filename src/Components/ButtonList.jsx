import   {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../utils/appSlice';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "New to you", "Computer Programming", "Netlify", "Coding"]

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  }
  const {theme}  = useSelector((store)=>store.app)

const slideLeft = ()=>{
  var slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft - 500;
}
const slideRight = ()=>{
  var slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft + 500;
}



  return (
  
    <>
      <div className='relative flex items-center py-2 px-1 w-full '> 
        <div><MdKeyboardArrowLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={"25px"}/></div>
<div id='slider' className=' flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  py-2 items-center'>
      {
        buttonList.map((buttonName, index) => {
          return (
            <div key={index}>
              <button onClick={() => { videoByTag(buttonName) }} 
              className={`${active === buttonName ? "bg-black text-white" : "bg-gray-400 text-black"  } ${theme && "bg-gray-600 text-white"} font-medium mx-1 cursor-pointer  px-3 py-2 rounded-lg`}><span className="whitespace-nowrap">{buttonName}</span></button>
            </div>
          )
        })
      }
      </div>
      <div><MdOutlineKeyboardArrowRight  className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={"25px"}/></div>
</div>

    </>
  )
}
export default ButtonList