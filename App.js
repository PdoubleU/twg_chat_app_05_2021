import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./src/styles/styleSheet";
import useImagePicker from "./src/helpers/imagePicker";
import template_img from "./assets/template_img.jpg";
import MainViewTemplate from "./src/templates/MainViewTemplate";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import GroupOfRooms from "./src/components/rooms/GroupOfRooms";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <MainViewTemplate>
          <GroupOfRooms></GroupOfRooms>
        </MainViewTemplate>
      </View>
    );
  }
}
