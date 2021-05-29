import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const LeftComponent = (props) => {
  const { title } = props;
  return (
    <Text h1 style={leftCompStyle.headerText}>
      {title}
    </Text>
  );
};

const leftCompStyle = StyleSheet.create({
  headerText: {
    position: "absolute",
    color: colors.plum.normal,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 36,
    lineHeight: 54,
    width: 127,
    height: 54,
    left: 16,
    top: 0,
  },
});

export default LeftComponent;
