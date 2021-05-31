import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { roomStyleActive, headerLeftComStyle } from "../../styles/styleSheet";

function HeaderLeftChatComponent({ picture, title }) {
  return (
    <View style={headerLeftComStyle.container}>
      <Image style={roomStyleActive.icon} source={{ uri: picture }}></Image>
      <Text>{title}</Text>
    </View>
  );
}

export default HeaderLeftChatComponent;
