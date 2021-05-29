import React from "react";
import { View, Text, Image } from "react-native";
import { Header } from "react-native-elements";
import search from "../../assets/search.svg";
import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import RightComponent from "../components/header/RightComponent";
import LeftComponent from "../components/header/LeftComponent";
import Wrapper from "../components/Wrapper";

function MainViewTemplate({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainViewTemplate;
