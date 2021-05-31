import React from "react";
import { View, Image, Text } from "react-native";
import { headerLeftComStyle } from "../../styles/styleSheet";

function HeaderLeftChatComponent({ picture, title }) {
  return (
    <View style={headerLeftComStyle.container}>
      <Image style={headerLeftComStyle.icon} source={{ uri: picture }}></Image>
      <View style={headerLeftComStyle.textCont}>
        <Text style={headerLeftComStyle.title}>{title}</Text>
        <Text style={headerLeftComStyle.subtitle}>Active now</Text>
      </View>
    </View>
  );
}

export default HeaderLeftChatComponent;
