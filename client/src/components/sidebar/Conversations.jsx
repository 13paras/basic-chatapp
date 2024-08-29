import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Loader from "../Loader";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const filteredUsers = conversations?.filteredUsers;

  if (loading) return <Loader />;
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {/*  {conversations.filteredUsers.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))} */}
      {filteredUsers?.map((user, index) => (
        <Conversation
          key={user._id}
          user={user}
          emoji={getRandomEmoji()}
          lastIndex={index === filteredUsers.length - 1}
        />
      ))}
    </div>
  );
};
export default Conversations;
