import React, { useEffect } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import GetData from "../services/GetData";

interface BottleProps {
  animationRef: React.RefObject<LottieView>;
  waterInBottle: { old: number; new: number };
}

const Bottle = ({ animationRef, waterInBottle }: BottleProps) => {
  const animateThis = (initial: number, final: number) => {
    const equi = 0.055;
    return animationRef.current?.play(initial * equi, final * equi);
  };

  async () => {
    await GetData().then((value) => {
      if (value) {
        const formattedValue = parseInt(value);
        animateThis(0, formattedValue);
      }
    });
  };

  const animateTheBottle = () => {
    const initialValue = waterInBottle?.old;
    const finalValue = waterInBottle?.new;

    animateThis(initialValue, finalValue);
  };

  useEffect(() => {
    animateTheBottle();
  }, [waterInBottle]);

  return (
    <View>
      <LottieView
        loop={false}
        ref={animationRef}
        style={{
          alignSelf: "center",
          width: 250,
          height: 500,
        }}
        source={require("../assets/Lottie/bottle.json")}
      />
    </View>
  );
};

export default Bottle;
