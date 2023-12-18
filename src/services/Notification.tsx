import * as Notfications from "expo-notifications";

export default function Notfication() {
  const random = Math.floor(Math.random() * 4);
  const messages = [
    "hora de beber agua",
    "faz muito tempo que não bebe agua, vamos resolver isso",
    "bebe agua vagabundo",
    " o corno vai beber agua não",
  ];
  const Notify = async () => {
    await Notfications.scheduleNotificationAsync({
      content: {
        title: "Vamos beber Agua",
        body: messages[random],
        data: [],
      },
      trigger: {
        seconds: 60,
        repeats: true
      },
    });
  };
  Notify();
}
