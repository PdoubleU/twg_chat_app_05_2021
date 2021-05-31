import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import Room from "../components/rooms/Room";
import { roomsStyle } from "../styles/styleSheet";
import roomsData from "../api/roomsData";

function RoomsScreen() {
  const { loading, error, data } = roomsData();

  return (
    <ScrollView style={roomsStyle.container}>
      {loading && <Text>Is loading</Text>}
      {!loading && !error ? (
        data.usersRooms.rooms.map((room) => {
          return <Room key={room.id} id={room.id} title={room.name}></Room>;
        })
      ) : (
        <Text>Error. Try again!</Text>
      )}
    </ScrollView>
  );
}

export default RoomsScreen;
