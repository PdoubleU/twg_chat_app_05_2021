import React from "react";
import { View, Text, Image } from "react-native";
import { Header } from "react-native-elements";
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import RightComponent from "./RightComponent";
import LeftComponent from "./LeftComponent";

function TopHeader() {
  return (
    <View>
      <Header containerStyle={headerStyles.header}>
        <LeftComponent title="Rooms"></LeftComponent>
        <RightComponent></RightComponent>
      </Header>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  header: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    height: 125,
    width: "auto",
    left: 0,
    top: 0,
    backgroundColor: colors.blue.tint01,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});

export default TopHeader;
