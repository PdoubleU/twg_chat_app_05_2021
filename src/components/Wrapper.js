import React from "react";
import { View, StyleSheet } from "react-native";

export default function Wrapper({ children }) {
  return <View style={wrapperStyle.container}>{children}</View>;
}

const wrapperStyle = StyleSheet.create({
  container: {
    position: "relative",
  },
});
