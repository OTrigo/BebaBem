import { ScrollView, StatusBar, TouchableOpacity, Image } from "react-native";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useRef, useState } from "react";
import Storage from "../services/Storage";
import GetData from "../services/GetData";

export const equi = 0.055;

interface DrinkWaterProps {
  qtdWaterButton: number;
  animationRef: React.RefObject<LottieView>;
  water: number;
  setWater: React.Dispatch<React.SetStateAction<number>>;
}

const DrinkWaterButton = ({
  qtdWaterButton,
  animationRef,
  water,
  setWater,
}: DrinkWaterProps) => {
  function handleAdd(value: number) {
    const old = water * equi;
    Storage(value);
    setWater(water + value);
    const anime = water * equi;
    animationRef.current?.play(old, anime);
  }

  return (
    <View>
      <TouchableOpacity onPress={() => handleAdd(qtdWaterButton)}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1864/1864846.png",
          }}
        />
      </TouchableOpacity>
      <Text>50ml</Text>
    </View>
  );
};

export default DrinkWaterButton;
