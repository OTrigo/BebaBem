import { TouchableOpacity, Image } from "react-native";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import Storage from "../services/Storage";
import styles from "../style/globalTheme";

export const equi = 0.055;

interface DrinkWaterProps {
  qtdWaterButton: number;
  animationRef: React.RefObject<LottieView>;
  waterInBottle: { old: number; new: number };
  setWaterInBottle: React.Dispatch<
    React.SetStateAction<{ old: number; new: number }>
  >;
  url: any;
}

const DrinkWaterButton = ({
  qtdWaterButton,
  animationRef,
  waterInBottle,
  setWaterInBottle,
  url,
}: DrinkWaterProps) => {
  function handleAdd(value: number) {
    Storage(value);

    const newValue = waterInBottle.new + value;
    const oldValue = waterInBottle.new;

    const initialAnimation = oldValue * equi;
    const finalAnimation = newValue * equi;

    console.log(initialAnimation, finalAnimation);
    animationRef.current?.play(10, 15);

    setWaterInBottle({
      old: oldValue,
      new: newValue,
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={() => handleAdd(qtdWaterButton)}>
        <Image style={{ width: 100, height: 100 }} source={url} />
      </TouchableOpacity>
      <Text style={styles.LightText}>{qtdWaterButton}ml</Text>
    </View>
  );
};

export default DrinkWaterButton;
