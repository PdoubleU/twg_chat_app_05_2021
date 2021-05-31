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

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue.tint01,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 125,
  },
  title: {
    color: colors.plum.normal,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 36,
    lineHeight: 54,
    width: 127,
    height: 54,
    left: 4,
    bottom: -11,
  },
});

export const roomsStyle = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.blue.tint02,
    paddingTop: 24,
  },
});

export const roomStyleActive = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 89,
    width: "auto",
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: colors.plum.normal,
  },
  icon: {
    borderRadius: 50,
    marginLeft: 16,
    height: 64,
    width: 64,
  },
  textBox: {
    marginLeft: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "normal",
    color: colors.whiteBckg,
  },
  lastMsg: {
    fontFamily: "SFCompactTextLight",
    marginTop: 3,
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "400",
    color: colors.whiteBckg,
  },
  activeStatus: {
    position: "absolute",
    backgroundColor: colors.active,
    borderRadius: 50,
    top: 12,
    right: 16,
    height: 12,
    width: 12,
  },
});

export const roomStyleInActive = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: 89,
    width: "auto",
    borderRadius: 12,
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.whiteBckg,
  },
  icon: {
    borderRadius: 50,
    marginLeft: 10,
    height: 64,
    width: 64,
  },
  textBox: {
    marginLeft: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "normal",
    color: colors.black,
  },
  lastMsg: {
    fontFamily: "SFCompactTextLight",
    marginTop: 4,
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "400",
    color: colors.black,
  },
  activeStatus: {
    position: "absolute",
    backgroundColor: colors.whiteBckg,
    top: 8,
    right: 16,
    fontSize: 10,
    lineHeight: 12,
  },
});

export const headerRightComStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    right: 16,
    bottom: -11,
  },
  icon: {
    borderRadius: 50,
    width: 44,
    height: 44,
    marginLeft: 10,
  },
});
export const headerLeftComStyle = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    width: "auto",
    left: 50,
    top: -80,
    zIndex: 9999,
  },
  icon: {
    borderRadius: 50,
    width: 44,
    height: 44,
    marginLeft: 10,
  },
});
