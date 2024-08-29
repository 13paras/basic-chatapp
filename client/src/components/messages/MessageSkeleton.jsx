const MessageSkeleton = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-12 rounded-full skeleton"></div>
      </div>
      <div className="chat-bubble w-[70%] skeleton "></div>
    </div>
  );
};
export default MessageSkeleton;
