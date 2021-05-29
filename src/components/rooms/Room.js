import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SearchIcon from "../../../assets/search.svg";
import { roomStyleActive, roomStyleInActive } from "../../styles/styleSheet";

function Room({ handlePress }) {
  const [activeRoom, setActiveRoom] = useState(true);
  console.log(handlePress);
  return (
    <TouchableOpacity
      style={
        activeRoom ? roomStyleActive.container : roomStyleInActive.container
      }
      onPress={handlePress}
    >
      <SearchIcon
        width={64}
        height={64}
        style={activeRoom ? roomStyleActive.icon : roomStyleInActive.icon}
      ></SearchIcon>
      <View
        style={activeRoom ? roomStyleActive.textBox : roomStyleInActive.textBox}
      >
        <Text
          style={activeRoom ? roomStyleActive.title : roomStyleInActive.tilte}
        >
          Who is the conversation with?
        </Text>
        <Text
          style={
            activeRoom ? roomStyleActive.lastMsg : roomStyleInActive.lastMsg
          }
        >
          Last message here...
        </Text>
      </View>
      <Text
        style={
          activeRoom
            ? roomStyleActive.activeStatus
            : roomStyleInActive.activeStatus
        }
      >
        {activeRoom ? "" : "4 m ago"}
      </Text>
    </TouchableOpacity>
  );
}

export default Room;
