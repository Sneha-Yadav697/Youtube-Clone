import { useSelector } from "react-redux";


const Loading = () => {
  const {theme} = useSelector((store)=>store.app)
  return (
    <div className="">
    <div className={` ${theme && 'bg-gray-800 shadow-none '} conatiner bg-gray-400  w-70 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300  `} > </div>
  
    </div>
  );
}

export default Loading;
