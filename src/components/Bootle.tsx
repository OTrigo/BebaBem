import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import Animation from "../services/Animation";
import GetData from "../services/GetData";
import { equi } from "./DrinkWaterButton";

interface BootleProps {
  setWater: React.Dispatch<React.SetStateAction<number>>;
}

const Bootle = ({ setWater }: BootleProps) => {
  const animationRef = useRef<LottieView>(null);

  async function pegarDados() {
    const get = await GetData().then((value) => {
      if (value) {
        setWater(parseInt(value));
        animationRef.current?.play(0, parseInt(value) * equi);
      }
    });
  }

  useEffect(() => {
    pegarDados();
  }, []);

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
      <Animation display={false} />
    </View>
  );
};

export default Bootle;
