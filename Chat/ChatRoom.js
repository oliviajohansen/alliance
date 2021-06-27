import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ChatRoomData } from "../data";

const ChatRoom = ({ route }) => {
  let roomId;
  if (!route || !route.params) {
    roomId = 5;
  } else {
    roomId = route.params.roomId;
  }
  const [messages, setMessages] = useState(ChatRoomData[roomId]);

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages.sort((a, b) => b.createdAt - a.createdAt)}
      onSend={(newMessage) => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
};

export default ChatRoom;
