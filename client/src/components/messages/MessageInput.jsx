import { SendIcon } from "lucide-react";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3 relative" onSubmit={handleSubmit}>
      <div className="w-full">
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-4 flex items-center pe-3"
        >
          {loading ? <div className="loading loading-spinner" /> : <SendIcon />}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
