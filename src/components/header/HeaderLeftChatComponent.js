import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { roomStyleActive, headerRightComStyle } from "../../styles/styleSheet";

function HeaderLeftChatComponent(picture, title) {
  console.log("title", title.body);
  return (
    <View style={headerRightComStyle.container}>
      <Image style={roomStyleActive.icon}></Image>
      <Text>{title.body}</Text>
    </View>
  );
}

export default HeaderLeftChatComponent;
