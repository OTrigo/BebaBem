import "react-native-gesture-handler";
import Notification from "./src/services/Notification";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./src/components/Stacks";
import RequestNotification from "./src/services/RequestNotification";
import { ThemeProvider } from "./src/contexts/DarkAndLight";
import { useTheme } from "./src/contexts/DarkAndLight";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
export default function App() {
  const { isLightMode } = useTheme();
  useEffect(() => {
    Notification();
    RequestNotification();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stacks />
      </ThemeProvider>
    </NavigationContainer>
  );
}
