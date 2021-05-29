import React from "react";
import { ScrollView } from "react-native";
import Room from "../components/rooms/Room";
import { roomsStyle } from "../styles/styleSheet";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

function RoomsScreen({ navigation }) {
  const handlePress = () => navigation.navigate("Chat");

  return (
    <ScrollView style={roomsStyle.container}>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
      <Room handlePress={handlePress}></Room>
    </ScrollView>
  );
}

export default RoomsScreen;
