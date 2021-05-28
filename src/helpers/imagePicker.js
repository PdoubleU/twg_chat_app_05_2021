import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import template_img from "../../assets/template_img.jpg";

function useImagePicker() {
  const [imageUri, setImageUri] = useState();

  let openImagePicker = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();
    console.log(pickerResult.uri);
    return setImageUri({ localUri: pickerResult.uri });
  };

  return [{ imageUri, openImagePicker }];
}

export default useImagePicker;
