import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function Wrapper({ children }) {
  return <View style={wrapperStyle.container}>{children}</View>;
}

const wrapperStyle = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: colors.blue.tint02,
  },
});
