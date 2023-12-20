import LottieView from "lottie-react-native";
interface AnimationProps {
  display: boolean;
}

function Animation({ display }: AnimationProps) {
  return (
    <LottieView
      autoPlay
      source={require("src/assets/Lottie/drink.json")}
      style={{
        display: display ? "none" : "flex",
        position: "absolute",
        alignSelf: "center",
      }}
    />
  );
}
export default Animation;
