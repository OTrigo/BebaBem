import Home from "./src/Pages/Home";
import Notfication from "./src/services/Notification";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
export default function App() {
  useEffect(() => {
    Notfication();
  }, []);
  return <Home/>;
}
