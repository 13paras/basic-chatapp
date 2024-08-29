import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import Message from "./Message";
import MessageSkeleton from "./MessageSkeleton";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="flex-1 overflow-auto">
      {!loading &&
        messages?.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={messagesEndRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3).map((_, i) => <MessageSkeleton key={i} />)]}
      {!loading && messages?.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-xl text-zinc-500 font-bold">
            Send a message to start the conversation
          </h1>
        </div>
      )}
    </div>
  );
};
export default Messages;
