import color from "color";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SearchIcon from "../../../assets/search.svg";
import colors from "../../styles/colors";

function Room(title, styles) {
  const [activeRoom, setActiveRoom] = useState(true);

  return (
    <View
      style={
        activeRoom ? roomStyleActive.container : roomStyleInActive.container
      }
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
    </View>
  );
}

const roomStyleActive = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 89,
    width: "auto",
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: colors.plum.tint01,
  },
  icon: {
    borderRadius: 50,
    marginLeft: 16,
  },
  textBox: {
    marginLeft: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "normal",
    color: colors.whiteBckg,
  },
  lastMsg: {
    fontFamily: "SFCompactTextLight",
    marginTop: 3,
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "400",
    color: colors.whiteBckg,
  },
  activeStatus: {
    position: "absolute",
    backgroundColor: colors.active,
    borderRadius: 50,
    top: 12,
    right: 16,
    height: 12,
    width: 12,
  },
});

const roomStyleInActive = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: 89,
    width: "auto",
    borderRadius: 12,
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.whiteBckg,
  },
  icon: {
    borderRadius: 50,
    marginLeft: 10,
  },
  textBox: {
    marginLeft: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "normal",
    color: colors.black,
  },
  lastMsg: {
    fontFamily: "SFCompactTextLight",
    marginTop: 4,
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "400",
    color: colors.black,
  },
  activeStatus: {
    position: "absolute",
    backgroundColor: colors.active,
    top: 8,
    right: 16,
    fontSize: 10,
    lineHeight: 12,
  },
});

export default Room;
