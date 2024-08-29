import { useEffect, useState } from "react";
import { useConversation } from "../zustand/useConversation";
import axios from "axios";

const useGetMessages = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/api/v1/messages/${selectedConversation._id}`
        );
        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};
export default useGetMessages;
