import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import Room from "../components/rooms/Room";
import { roomsStyle } from "../styles/styleSheet";
import { DataContext } from "../providers/DataProvider";

function RoomsScreen() {
  const ctx = useContext(DataContext);
  const [data, loading, error] = ctx.getData();

  // component loads all rooms available for user via DataContext (apollo query) and render them on the screen, as a list:
  return (
    <ScrollView style={roomsStyle.container}>
      {loading && <Text>Is loading...</Text>}
      {!loading && !error ? (
        data.usersRooms.rooms.map((room) => {
          return (
            <Room
              key={room.id}
              id={room.id}
              title={room.name}
              active={true}
            ></Room>
          );
        })
      ) : (
        <Text>Error. Try again!</Text>
      )}
    </ScrollView>
  );
}

export default RoomsScreen;
