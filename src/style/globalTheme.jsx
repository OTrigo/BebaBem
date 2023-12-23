import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  //Dark Theme
  DarkBackground: {
    backgroundColor: "#171515",
    padding: "2%",
  },
  DarkBackgroundSetting: {
    backgroundColor: "#171515",
    padding: "2%",
    height: "100%",
  },
  DarkLabel: {
    color: "#f0f0f0",
    fontSize: 20,
    paddingHorizontal: "3%",
  },
  DarkInput: {
    width: "80%",
    textAlign: "center",
    color: "#f0f0f0",
    height: "5%",
    backgroundColor: "#202020",
    marginHorizontal: "3%",
  },
  DarkButton: {
    width: "90%",
    marginTop: "5%",
    marginHorizontal: "2%",
    paddingVertical: 10,
    backgroundColor: "#3688FA",
    borderRadius: 10,
  },
  DarkTextSetting: {
    color: "#171515",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  DarkIcon: {
    color: "#f0f0f0",
    alignSelf: "flex-end",
  },
  DarkInfo: {
    textAlign: "center",
    fontSize: 30,
    color: "#f0f0f0",
    fontWeight: "bold",
  },

  DarkText: {
    color: "#f0f0f0",
    alignSelf: "center",
    fontSize: 20,
  },

  //light theme
  LightBackground: {
    backgroundColor: "#f0f0f0",
    padding: "2%",
  },
  LightIcon: {
    color: "#171515",
    alignSelf: "flex-end",
  },
  LightInfo: {
    textAlign: "center",
    fontSize: 30,
    color: "#171515",
    fontWeight: "bold",
  },
  LightText: {
    color: "#171515",
    alignSelf: "center",
    fontSize: 20,
  },
  LightBackgroundSetting: {
    backgroundColor: "#f0f0f0",
    padding: "2%",
    height: "100%",
  },
  LightLabel: {
    color: "#171515",
    fontSize: 20,
    paddingHorizontal: "3%",
  },
  LightInput: {
    width: "80%",
    textAlign: "center",
    color: "#171515",
    height: "5%",
    backgroundColor: "#d5d5d5",
    marginHorizontal: "3%",
  },
  LightButton: {
    width: "90%",
    marginTop: "5%",
    marginHorizontal: "2%",
    paddingVertical: 10,
    backgroundColor: "#3688FA",
    borderRadius: 10,
  },
  LightTextSetting: {
    color: "#f0f0f0",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  drinkWaterButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
export default style;
