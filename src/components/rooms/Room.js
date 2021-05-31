import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { roomStyleActive, roomStyleInActive } from "../../styles/styleSheet";
import { useNavigation } from "@react-navigation/native";
import roomData from "../../api/roomData";

function Room({ ...props }) {
  const { id, title, active } = props;
  const [activeRoom, setActiveRoom] = useState(active);
  const { loading, error, data } = roomData(id);
  const navigation = useNavigation();
  const [lastActive, setLastActive] = useState("some time ago");

  useEffect(() => {
    if (!data) return;
    setLastActive(data.room.messages[data.room.messages.length - 1].insertedAt);
  }, [loading]);

  const handlePress = (id, data) => navigation.navigate("Chat", { id, data });

  return (
    <TouchableOpacity
      style={
        activeRoom ? roomStyleActive.container : roomStyleInActive.container
      }
      onPress={() => handlePress(id, data)}
    >
      {loading && <Text>Is loading</Text>}
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
            {activeRoom ? "" : lastActive}
          </Text>
        </>
      ) : (
        <Text>Error. Try again!</Text>
      )}
    </TouchableOpacity>
  );
}

export default Room;
