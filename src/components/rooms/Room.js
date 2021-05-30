import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { roomStyleActive, roomStyleInActive } from "../../styles/styleSheet";
import roomData from "../../api/roomData";

function Room({ ...props }) {
  const { id, title } = props;
  const [activeRoom, setActiveRoom] = useState(true);
  const { loading, error, data } = roomData(id);

  const handlePress = () => alert("fetch room");

  return (
    <TouchableOpacity
      style={
        activeRoom ? roomStyleActive.container : roomStyleInActive.container
      }
      onPress={handlePress}
    >
      {loading && <Text>Is loading</Text>}
      {console.log(data)}
      {!loading && !error ? (
        <>
          <Image
            style={activeRoom ? roomStyleActive.icon : roomStyleInActive.icon}
            source={{
              uri: data.room.messages[data.room.messages.length - 1].user
                .profilePic,
            }}
          ></Image>
          <View
            style={
              activeRoom ? roomStyleActive.textBox : roomStyleInActive.textBox
            }
          >
            <Text
              style={
                activeRoom ? roomStyleActive.title : roomStyleInActive.tilte
              }
            >
              {title}
            </Text>
            <Text
              style={
                activeRoom ? roomStyleActive.lastMsg : roomStyleInActive.lastMsg
              }
            >
              {data.room.messages[data.room.messages.length - 1].body}
            </Text>
          </View>
          <Text
            style={
              activeRoom
                ? roomStyleActive.activeStatus
                : roomStyleInActive.activeStatus
            }
          >
            {activeRoom
              ? ""
              : data.room.messages[data.room.messages.length - 1].insertedAt}
          </Text>
        </>
      ) : (
        <Text>Error. Try again!</Text>
      )}
    </TouchableOpacity>
  );
}

export default Room;
