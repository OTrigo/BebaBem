import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import GetData from "../services/GetData";
import { equi } from "./DrinkWaterButton";

interface BootleProps {
  setWater: React.Dispatch<React.SetStateAction<number>>;
  water: number;
}

const Bootle = ({ setWater, water }: BootleProps) => {

  async function pegarDados() {
    await GetData().then((value) => {
      if (value) {
        setWater(parseInt(value));
        animationRef.current?.play(0, parseInt(value) * equi);
      }
    });
  }

  useEffect(() => {
    pegarDados();
  }, [water]);

  const animationRef = useRef<LottieView>(null);

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

export default Bootle;
