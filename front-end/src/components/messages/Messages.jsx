import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessagesSkelenton from "../skelentons/MessageSkelenton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading &&
        [...Array(3)].map((_, idx) => <MessagesSkelenton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className=" text-center text-gray-300">
          Send a message to conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
