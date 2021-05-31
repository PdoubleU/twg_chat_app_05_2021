import React from "react";
import {
  InputToolbar,
  Send,
  Bubble,
  Composer,
  MessageContainer,
} from "react-native-gifted-chat";
import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import SendIcon from "../../assets/send.svg";

export const customInputToolbar = (props) => {
  return <InputToolbar {...props} containerStyle={chatStyles.inputBar} />;
};

export const customSendButton = (props) => {
  return (
    <Send {...props} containerStyle={chatStyles.sendBtn}>
      <SendIcon></SendIcon>
    </Send>
  );
};

export const customBubble = (props) => {
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

export const customComposer = (props) => {
  return <Composer {...props} textInputStyle={chatStyles.textArea} />;
};

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
