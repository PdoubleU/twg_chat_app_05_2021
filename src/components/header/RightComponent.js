import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SearchIcon from "../../../assets/search.svg";
import RoomsIcon from "../../../assets/rooms.svg";
import colors from "../../styles/colors";

function RightComponent(title, styles) {
  return (
    <View style={rightCompStyle.container}>
      <SearchIcon style={rightCompStyle.icon}></SearchIcon>
      <RoomsIcon style={rightCompStyle.icon}></RoomsIcon>
    </View>
  );
}

const rightCompStyle = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    width: "auto",
    left: 160,
    flex: 1,
    flexDirection: "row",
  },
  icon: {
    borderRadius: 50,
    width: 44,
    height: 44,
    marginLeft: 10,
  },
});

export default RightComponent;
