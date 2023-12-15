import LottieView from "lottie-react-native";
function Animation(display: any): React.JSX.Element {
  return (
    <LottieView
      autoPlay
      source={require("../assets/Lottie/drink.json")}
      style={{
        display: display ? "none" : "flex",
        position: "absolute",
        alignSelf: "center",
      }}
    />
  );
}
export default Animation;
