import { ScrollView, StatusBar, TouchableOpacity, Image } from "react-native";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import style from "./style";
import Storage from "../../services/Storage";
import GetData from "../../services/GetData";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const animationRef = useRef<LottieView>(null);
  const [water, setWater] = useState(0); //valor da agua em ML
  const equi = 0.055;

  async function pegarDados() {
    const get = await GetData().then((value) => {
      if (value) {
        setWater(parseInt(value));
        animationRef.current?.play(0, parseInt(value) * equi);
      }
    });
  }

  function handleAdd(value: number) {
    const old = water * equi;
    console.log(old);
    Storage(value);
    setWater(water + value);
    console.log(water * equi);
    const anime = water * equi;
    animationRef.current?.play(old, anime);
  }

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Text style={style.info}>{`Você bebeu  ${water}ml/2L`}</Text>
        <View>
          <LottieView
            loop={false}
            ref={animationRef}
            style={{
              alignSelf: "center",
              width: 250,
              height: 500,
            }}
            source={require("../../assets/Lottie/bottle.json")}
          />
        </View>

        <View>
          <TouchableOpacity onPress={() => handleAdd(50)}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1864/1864846.png",
              }}
            />
          </TouchableOpacity>
          <Text>50ml</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1864/1864846.png",
              }}
            />
          </TouchableOpacity>
          <Text>50ml</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1864/1864846.png",
              }}
            />
          </TouchableOpacity>
          <Text>50ml</Text>
        </View>
      </ScrollView>
    </>
  );
}
