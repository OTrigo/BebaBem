import { Button, ScrollView, StatusBar, View, Image } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { Text } from "react-native";
import LottieView from "lottie-react-native";
import style from "./style";
import React, { useRef, useState, useEffect } from "react";
import SplashScreenComponent from "../SplashScreen";
import Bottle from "../../components/Bottle";
import DrinkWaterButton from "../../components/DrinkWaterButton";
import Animation from "../../services/Animation";
import { TouchableOpacity } from "react-native-gesture-handler";
import GetData from "../../services/GetData";

export default function Home({ navigation }: any) {
  const animationRef = useRef<LottieView>(null);
  const [waterInBottle, setWaterInBottle] = useState({
    old: 0,
    new: 0,
  });
  async function pegaDados(){
    await GetData().then((value:string|null)=>{
      if(value){
        setWaterInBottle({
          old:0,
          new: parseInt(value)
        })
      }
     })
  }

  useEffect(()=>{
    pegaDados();
  },[])

  return (
    <>
      <SplashScreenComponent />
      <StatusBar />
      <ScrollView style={style.homeContainer}>
        <Text style={style.info}>{`Você bebeu ${waterInBottle.new}ml/2L`}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Feather name="settings" size={36} color="black" />
        </TouchableOpacity>
        <Bottle animationRef={animationRef} waterInBottle={waterInBottle} />
        <Animation display={true} />
        <View style={style.drinkWaterButtons}>
          <DrinkWaterButton
            qtdWaterButton={50}
            animationRef={animationRef}
            waterInBottle={waterInBottle}
            setWaterInBottle={setWaterInBottle}
          />
          <DrinkWaterButton
            qtdWaterButton={150}
            animationRef={animationRef}
            waterInBottle={waterInBottle}
            setWaterInBottle={setWaterInBottle}
          />
          <DrinkWaterButton
            qtdWaterButton={300}
            animationRef={animationRef}
            waterInBottle={waterInBottle}
            setWaterInBottle={setWaterInBottle}
          />
        </View>
      </ScrollView>
    </>
  );
}
