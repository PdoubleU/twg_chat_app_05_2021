import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./src/styles/styleSheet";
import useImagePicker from "./src/helpers/imagePicker";
import template_img from "./assets/template_img.jpg";
import MainViewTemplate from "./src/templates/MainViewTemplate";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Rooms from "./src/views/Rooms";
import TopHeader from "./src/components/header/TopHeader";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    SFCompactTextRegular: require("./assets/fonts/sf-compact-text-regular.ttf"),
    SFCompactTextLight: require("./assets/fonts/sf-compact-text-light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <MainViewTemplate>
          <TopHeader></TopHeader>
          <Rooms></Rooms>
        </MainViewTemplate>
      </View>
    );
  }
}
