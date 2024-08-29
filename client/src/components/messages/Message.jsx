import dayjs from "dayjs";
import { useAuthcontext } from "../../context/AuthContext";
import { useConversation } from "../../zustand/useConversation";

const Message = ({ message }) => {

  const { authUser } = useAuthcontext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser?._id;
  const chatClassMe = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-zinc-600 text-white";
  const shakeClass = message?.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassMe}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} `}>
        {message.message}
      </div>
      <div
        className={`chat-footer opacity-50 text-xs flex gap-1 items-center `}
      >
        {dayjs(message.createdAt).format("hh:mm A")}
      </div>
    </div>
  );
};
export default Message;
