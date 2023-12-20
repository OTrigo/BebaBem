import { StyleSheet } from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { hideAsync } from "expo-splash-screen";

interface splashProps{
  setIsPlaying: React.Dispatch<
  React.SetStateAction<boolean>
  >;
}


export function Splash({setIsPlaying}: splashProps) {
 

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      (!status.isPlaying) ? setIsPlaying(false) : null
    }
  };

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require("../assets/Splash/splash.mp4")}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true}
    />
  );
}
