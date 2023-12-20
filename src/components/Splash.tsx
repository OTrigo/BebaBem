import { StyleSheet } from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";

export function Splash() {

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus)=>{
    console.log(status)
  }

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require("../assets/Splash/splash.mp4")}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    />
  );
}
