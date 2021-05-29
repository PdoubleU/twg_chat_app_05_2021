import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SearchIcon from "../../../assets/search.svg";
import colors from "../../styles/colors";

function Room(title, styles) {
  return (
    <View style={roomStyle.container}>
      <SearchIcon style={roomStyle.icon}></SearchIcon>
      <View>
        <Text>This is tilte</Text>
        <Text>Last message here...</Text>
      </View>
      <Text>Active</Text>
    </View>
  );
}

const roomStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 89,
    width: "auto",
    backgroundColor: colors.blue.tint02,
    borderRadius: 12,
    marginBottom: 10,
  },
  icon: {
    borderRadius: 50,
    width: 44,
    height: 44,
    marginLeft: 10,
  },
  title: {},
  lastMsg: {},
  lastActive: {},
});

export default Room;
