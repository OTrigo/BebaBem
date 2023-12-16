import 'react-native-gesture-handler';
import Notification from "./src/services/Notification";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./src/components/Stacks";



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
export default function App() {
  useEffect(() => {
    Notification();
  }, []);


  return(
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  )
}
