

const ChatMessages = ({item}) => {
  
  return (
    <div className="flex items-center">
      <div>
      <img className=" w-8 rounded-full " src="https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw" alt="" />
      </div>
      <div className="flex">
        <h1 className="ml-2 font-bold text-sm">{item.name} </h1>
        <p className="ml-2  text-sm">{item.message}</p>
      </div>
    </div>
  )
}

export default ChatMessages
