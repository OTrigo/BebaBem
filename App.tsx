import "react-native-gesture-handler";
import Notification from "./src/services/Notification";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./src/components/Stacks";
import RequestNotification from "./src/services/RequestNotification";
import { Splash } from "./src/components/Splash";
import { preventAutoHideAsync } from "expo-splash-screen";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

preventAutoHideAsync();
export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    Notification();
    RequestNotification();
  }, []);

  return (
    // <>
    //   {isPlaying ? (
        <Splash setIsPlaying={setIsPlaying} />
    //   ) : (
    //     <NavigationContainer>
    //       <Stacks />
    //     </NavigationContainer>
    //   )}
    // </>
  );
}
