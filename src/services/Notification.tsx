import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notfications from "expo-notifications";
import messages from 'src/assets/JSON/messages.json'


export default async function Notfication() {
  const timer = await AsyncStorage.getItem('interval');
  const random = Math.floor(Math.random() * 10);
  

  const message = messages;
  const Notify = async () => {
    await Notfications.scheduleNotificationAsync({
      content: {
        title: "Vamos beber Agua",
        body: message.mensagens[random],
        data: [],
      },
      trigger: {
        seconds: (timer) ? parseInt(timer): 7200,
        repeats: true
      },
    });
  };
  Notify();
}
