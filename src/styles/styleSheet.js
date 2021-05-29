import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue.tint01,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 305,
    height: 159,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  buttonTxt: {
    fontSize: 20,
    color: "#fff",
  },
});
