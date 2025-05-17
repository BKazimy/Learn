import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {
  function handleNotification() {
    // console.log("hello dere!");
    Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { userName: 'Dmitry' },
      },
      trigger: { seconds: 2 },
    });    
    console.log("notified!");
  }
  return (
    <View style={styles.container}>
      <Button title='Push Notification' onPress={handleNotification} />
      <StatusBar style="auto" />
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
