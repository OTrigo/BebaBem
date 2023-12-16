import { Button, ScrollView, StatusBar, View } from "react-native";
import { Text } from "react-native";
import LottieView from "lottie-react-native";
import style from "./style";
import React, { useRef, useState } from "react";
import SplashScreenComponent from "../SplashScreen";
import Bootle from "../../components/Bootle";
import DrinkWaterButton from "../../components/DrinkWaterButton";
import Animation from "../../services/Animation";

export default function Home({ navigation }: any) {
  const animationRef = useRef<LottieView>(null);
  const [water, setWater] = useState(0); //valor da agua em ML

  return (
    <>
      <SplashScreenComponent />
      <StatusBar />
      <ScrollView>
        <Text style={style.info}>{`Você bebeu ${water}ml/2L`}</Text>
        <Button
          title="settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <Bootle setWater={setWater} water={water} />
        {/* melhorar animação e o tempo dela*/}
        <Animation display={true} />
        <View style={style.drinkWaterButtons}>
          <DrinkWaterButton
            qtdWaterButton={50}
            animationRef={animationRef}
            water={water}
            setWater={setWater}
          />
          <DrinkWaterButton
            qtdWaterButton={150}
            animationRef={animationRef}
            water={water}
            setWater={setWater}
          />
          <DrinkWaterButton
            qtdWaterButton={300}
            animationRef={animationRef}
            water={water}
            setWater={setWater}
          />
        </View>
      </ScrollView>
    </>
  );
}
function pegarDados() {
  throw new Error("Function not implemented.");
}
