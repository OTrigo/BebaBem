import * as Notifications from 'expo-notifications';

export default async function RequestNotification() {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
    android:{
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    }
  });
}