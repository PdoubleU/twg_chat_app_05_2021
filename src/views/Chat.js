import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import {
  customInputToolbar,
  customSendButton,
  customBubble,
  customComposer,
} from "../helpers/GiftedChatCustomize";
import HeaderLeftChatComponent from "../components/header/HeaderLeftChatComponent";

export function Example({ route, navigation }) {
  const [msgs, setMsgs] = useState(null);
  const messages = route.params.data.room.messages;

  useEffect(() => {
    if (!messages) return; // no messages stored, we can just open empty chat
    let setOfMessages = [];
    messages.map((msg) => {
      setOfMessages.push({
        _id: msg.id,
        text: msg.body,
        createdAt: msg.insertedAt,
        user: {
          _id: msg.user.id,
          name: msg.user.firstName,
          avatar: msg.user.profilePic,
        },
      });
    });
    setMsgs(setOfMessages);
  }, []);

  const onSend = useCallback((msgs = []) => {
    setMsgs((previousMessages) => GiftedChat.append(previousMessages, msgs));
  }, []);

  return (
    <>
      <HeaderLeftChatComponent></HeaderLeftChatComponent>
      <GiftedChat
        alwaysShowSend={true}
        renderInputToolbar={(props) => customInputToolbar(props)}
        renderSend={(props) => customSendButton(props)}
        renderBubble={(props) => customBubble(props)}
        renderComposer={(props) => customComposer(props)}
        messages={msgs}
        renderDay={() => null}
        renderTime={() => null}
        onSend={(msgs) => onSend(msgs)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}
