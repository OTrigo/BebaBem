import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";


const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
