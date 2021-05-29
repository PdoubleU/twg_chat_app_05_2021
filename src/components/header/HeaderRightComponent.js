import React from "react";
import { View, TouchableOpacity } from "react-native";
import SearchIcon from "../../../assets/search.svg";
import RoomsIcon from "../../../assets/rooms.svg";
import CameraIcon from "../../../assets/videocall.svg";
import PhoneIcon from "../../../assets/phone.svg";
import { headerRightComStyle } from "../../styles/styleSheet";

const [iconTypeChat, iconTypeRooms] = ["chat", "rooms"];

function HeaderRightComponent({ handlePress, type }) {
  if (type === iconTypeChat) {
    return (
      <View style={headerRightComStyle.container}>
        <TouchableOpacity onPress={handlePress}>
          <PhoneIcon style={headerRightComStyle.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <CameraIcon style={headerRightComStyle.icon} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={headerRightComStyle.container}>
      <TouchableOpacity onPress={handlePress}>
        <SearchIcon style={headerRightComStyle.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <RoomsIcon style={headerRightComStyle.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderRightComponent;
