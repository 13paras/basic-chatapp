import { MessageCircleCode } from "lucide-react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useConversation } from "../../zustand/useConversation";
import { useEffect } from "react";

const Messagecontainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    

    // clear selected conversation when user navigates to another page
    return () => {
      setSelectedConversation(null)
    }
  }, [])


  return (
    <div className="md:min-w-[450px] bg-zinc-800/60 flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default Messagecontainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋🏻 John</p>
        <p>Select a chat a start messaging</p>
        <MessageCircleCode />
      </div>
    </div>
  );
};
