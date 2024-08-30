import { useDispatch, useSelector } from "react-redux";
import ChatMessages from "./ChatMessages";
import { useEffect } from "react";
import { setMessage } from "../utils/ChatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomMessage } from "../utils/helper";

const Livechat = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        setMessage({
          name: generateRandomName(),
          message: generateRandomMessage(15),
        })
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="px-4 py-2 ">
      <div>
        {" "}
        {message.map((item, idx) => {
          return <ChatMessages key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Livechat;
