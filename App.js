import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./src/styles/styleSheet";
import useImagePicker from "./src/helpers/imagePicker";

export default function App() {
  const [{ imageUri, openImagePicker }] = useImagePicker();

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri.localUri }} style={styles.image} />
      <Text style={styles.instructions}>Here is a nice photo</Text>
      <TouchableOpacity onPress={openImagePicker} style={styles.button}>
        <Text>Get a photo</Text>
      </TouchableOpacity>
    </View>
  );
}
