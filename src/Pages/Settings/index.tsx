import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
  const [theme, setTheme] = useState("claro");
  const [interval, setInterval] = useState("3600");
  let values: any;
  async function pegardados() {
    try {
      values = await AsyncStorage.multiGet(["theme", "interval"])
       setTheme(values[0][1])
       setInterval(values[1][1])               

    } catch (e) {
      
    }
  }
  useEffect(() => {
    pegardados();
  }, []);

  async function handleSaveSettings() {
    await AsyncStorage.setItem("theme", theme);
    await AsyncStorage.setItem("interval", interval);
  }

  return (
    <View>
      <Text>Tema:</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue, itemIndex) => setTheme(itemValue)}
      >
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Claro" value="Claro" />
      </Picker>
      <Text>Intervalo de notificações:</Text>
      <Picker
        selectedValue={interval}
        onValueChange={(itemValue, itemIndex) => setInterval(itemValue)}
      >
        <Picker.Item label="1 hora" value="3600" />
        <Picker.Item label="2 horas" value="7200" />
        <Picker.Item label="3 horas" value="10800" />
        <Picker.Item label="4 horas" value="14400" />
      </Picker>

      <TouchableOpacity onPress={handleSaveSettings}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
