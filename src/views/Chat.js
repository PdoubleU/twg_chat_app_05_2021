import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import {
  customInputToolbar,
  customSendButton,
  customBubble,
  customComposer,
} from "../helpers/GiftedChatCustomize";
import HeaderLeftChatComponent from "../components/header/HeaderLeftChatComponent";
import AddMsg from "../api/mutationAddMsg";
import { unshiftMsgs } from "../helpers/unshiftMsgs";

export function Example({ route }) {
  const [msgs, setMsgs] = useState(null);
  const { addMsg } = AddMsg();
  const messages = route.params.data.room.messages;
  const roomId = route.params.id;

  useEffect(() => {
    // no messages stored, we can just open empty chat
    if (!messages) return;
    // use auxiliary function to return new array of downloaded messages:
    let setOfMessages = unshiftMsgs(messages);
    // set msgs with downloaded messages:
    setMsgs(setOfMessages);
  }, []);

  const onSend = useCallback((message = []) => {
    let body = message[0].text;
    addMsg({ variables: { roomId, body } });
    setMsgs((previousMessages) => GiftedChat.append(previousMessages, message));
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
        onSend={(message) => onSend(message)}
        user={{
          id: "184f7251-7688-4ea1-83ba-1d857ab6e4e3",
        }}
      />
    </>
  );
}
