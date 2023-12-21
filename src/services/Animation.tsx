import LottieView from "lottie-react-native";
interface AnimationProps {
  opacity: number;
}

function Animation({opacity} : AnimationProps) {
  return (
    <LottieView
      autoPlay
      source={require("../assets/Lottie/drink.json")}
      style={{
        opacity: opacity,
        position: "absolute",
        alignSelf: "center",
      }}
    />
  );
}
export default Animation;
