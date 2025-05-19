import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Button, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    async function configurePushNotifications() {
      try {
        const permission = await Notifications.getPermissionsAsync();
        const { status } = permission;
        let finalStatus = status;
        console.log("permission", finalStatus);
        if (finalStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }

        console.log("token request:");
        const token = await Notifications.getExpoPushTokenAsync();
        console.log("token:", token);

        if(Platform.OS === 'android') {
          console.log("Android, default channel");
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.DEFAULT,
          });
        }
      }
      catch (error) {
        console.log("Error in push notification:", error);
      }
    }
      // console.log("permission");
    configurePushNotifications();
  }, []);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(notification => {
      // console.log("Notification Recieved!");
      // console.log(notification);
      const userName = notification.request.content.data.userName;
      console.log("Notification!");
      // console.log(userName);
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      // console.log("Notification Response Recieved!");
      // console.log(response);
      const userName = response.notification.request.content.data.userName;
      console.log(userName);
    })

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  function handleNotification() {
    // console.log("hello dere!");
    Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { userName: 'SKazim' },
      },
      trigger: { seconds: 2 },
    });    
    // console.log("clicked!");
  }
  return (
    <View style={styles.container}>
      <Button title='Push Notification' onPress={handleNotification} />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
