import React from "react";
import Converstaion from "./Converstaion";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, Idx) => {
        return (
          <Converstaion
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={Idx === conversations.length - 1}
          />
        );
      })}
      {loading ? (
        <span className=" loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
