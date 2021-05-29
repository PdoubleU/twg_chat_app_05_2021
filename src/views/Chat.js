import React, { useState, useCallback, useEffect } from "react";
import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
  Composer,
  MessageContainer,
} from "react-native-gifted-chat";
import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import SendIcon from "../../assets/send.svg";
import { View } from "react-native";

const customInputToolbar = (props) => {
  return <InputToolbar {...props} containerStyle={chatStyles.inputBar} />;
};

const customSendButton = (props) => {
  return (
    <Send {...props} containerStyle={chatStyles.sendBtn}>
      <SendIcon></SendIcon>
    </Send>
  );
};

const customBubble = (props) => {
  return (
    <Bubble
      {...props}
      textStyle={{
        right: chatStyles.outMessage,
      }}
      wrapperStyle={{
        left: chatStyles.inMessage,
        right: chatStyles.outMessage,
      }}
    />
  );
};

const customComposer = (props) => {
  return <Composer {...props} textInputStyle={chatStyles.textArea} />;
};

export function Example() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      alwaysShowSend={true}
      renderInputToolbar={(props) => customInputToolbar(props)}
      renderSend={(props) => customSendButton(props)}
      renderBubble={(props) => customBubble(props)}
      renderComposer={(props) => customComposer(props)}
      messages={messages}
      renderDay={() => null}
      renderTime={() => null}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

export const chatStyles = StyleSheet.create({
  inMessage: {
    backgroundColor: colors.whiteBckg,
  },
  outMessage: {
    backgroundColor: colors.plum.tint01,
    color: colors.whiteBckg,
  },
  isTyping: {},
  inputBar: {
    borderTopColor: colors.blue.tint01,
    borderColor: colors.blue.tint01,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomWidth: 12,
    borderTopWidth: 15,
    borderLeftWidth: 16,
    borderRightWidth: 16,
    backgroundColor: colors.blue.tint01,
  },
  sendBtn: {
    backgroundColor: colors.blue.tint01,
    marginLeft: 10,
  },
  textArea: {
    backgroundColor: colors.whiteBckg,
    marginLeft: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
