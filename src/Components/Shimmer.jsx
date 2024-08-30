
import { useSelector } from "react-redux";

const Shimmer = () => {
  const {video,  theme } = useSelector((store) => store.app);
  const open = useSelector((store) => store.app.open);
  return  (
  <div
          className={` ${
            open === false
              ? " grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-1 "
              : " grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-1"
          } w-full m-auto  grid`}
        >
 {
    video.length > "0" ? video.map((item)=>{
      return(
        <div className={` conatiner   w-80 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300 ${theme && 'shadow-none text-white '} `}></div>)}):
        <div className="grid grid-cols-4">
        <div className={` conatiner   w-72 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300 ${theme && 'shadow-none text-white '} `}></div>
        <div className={` conatiner   w-72 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300 ${theme && 'shadow-none text-white '} `}></div>
        <div className={` conatiner   w-72 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300 ${theme && 'shadow-none text-white '} `}></div>
        <div className={` conatiner   w-72 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300 ${theme && 'shadow-none text-white '} `}></div>
        <div className={` conatiner   w-72 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300 ${theme && 'shadow-none text-white '} `}></div>
        <div className={` conatiner   w-72 m-3 h-96 rounded-2xl shadow-lg shadow-gray-300 ${theme && 'shadow-none text-white '} `}></div>
        </div>
  }
 
</div>
 
  );
};
export default Shimmer;
