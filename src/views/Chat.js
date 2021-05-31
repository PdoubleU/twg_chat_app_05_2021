import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, TouchableOpacity, Image, Text } from "react-native";
import {
  customInputToolbar,
  customSendButton,
  customBubble,
  customComposer,
  customMessage,
} from "../helpers/GiftedChatCustomize";
import HeaderLeftChatComponent from "../components/header/HeaderLeftChatComponent";
import AddMsg from "../api/mutationAddMsg";
//import userIsTyping from "../api/typingUserSub";
import { unshiftMsgs } from "../helpers/unshiftMsgs";
import { useSubscription, gql } from "@apollo/client";

const typingSub = gql`
  subscription typingUser($roomId: String!) {
    typingUser(roomId: $roomId) {
      firstName
    }
  }
`;

const messageAddedSub = gql`
  subscription onAddMessage($roomId: String!) {
    messageAdded(roomId: $roomId) {
      body
    }
  }
`;

export function Example({ route }) {
  const dataLastItem = route.params.data.room.messages.length - 1;
  const messages = route.params.data.room.messages;
  const userName = route.params.data.room.messages[dataLastItem].user.firstName;
  const userPic = route.params.data.room.messages[dataLastItem].user.profilePic;
  const roomId = route.params.id;
  const [msgs, setMsgs] = useState(null);
  const { addMsg } = AddMsg();
  const { newMessage } = useSubscription(messageAddedSub, {
    variables: { roomId },
  });
  const { userIsTyping } = useSubscription(typingSub, {
    variables: { roomId },
  });

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
      {/* <Text>New message: {!loading && data.body}</Text> */}
      <HeaderLeftChatComponent
        title={userName}
        picture={userPic}
      ></HeaderLeftChatComponent>
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
          _id: "184f7251-7688-4ea1-83ba-1d857ab6e4e3",
        }}
      />
    </>
  );
}
