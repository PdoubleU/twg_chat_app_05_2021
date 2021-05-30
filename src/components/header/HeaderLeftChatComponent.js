import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { roomStyleActive, headerRightComStyle } from "../../styles/styleSheet";

function HeaderLeftChatComponent(picture) {
  return (
    <View style={headerRightComStyle.container}>
      <Image style={roomStyleActive.icon}></Image>
    </View>
  );
}

export default HeaderLeftChatComponent;
