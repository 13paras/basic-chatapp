import { useState } from "react";
import { useConversation } from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  //   const { authUser } = useAuthcontext();
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `/api/v1/messages/send/${selectedConversation._id}`,
        {
          message,
        }
      );

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data?.data]);
    } catch (error) {
      toast.error({
        title: "Send Message Error",
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;
