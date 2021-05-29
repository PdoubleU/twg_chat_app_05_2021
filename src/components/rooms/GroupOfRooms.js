import React from "react";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import Room from "./Room";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

function GroupOfRooms(title, styles) {
  return (
    <ScrollView style={groupOfRoomsStyle.container}>
      <Room></Room>
      <Room></Room>
      <Room></Room>
      <Room></Room>
      <Room></Room>
      <Room></Room>
      <Room></Room>
      <Room></Room>
      <Room></Room>
      <Room></Room>
    </ScrollView>
  );
}

const groupOfRoomsStyle = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 130,
    backgroundColor: colors.blue.tint02,
  },
});

export default GroupOfRooms;
