// utility/Notification.js
import * as Notifications from 'expo-notifications';

// Configure the notification handler to determine how notifications should behave
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

/**
 * Schedule a local notification with the provided content and trigger settings.
 * Example `trigger` values:
 * - `null` for immediate notification.
 * - `{ seconds: 10 }` for a notification 10 seconds later.
 * - `{ hour: 9, minute: 0, repeats: true }` for a daily notification at 9:00 AM.
 */
export const scheduleNotification = async (title, body, id, trigger = null) => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: { id }, // Attach the ID to the notification data
      },
      trigger,
    });
    console.log('Notification scheduled successfully!');
  } catch (error) {
    console.error('Error scheduling notification:', error);
  }
};

/**
 * Set up a listener for notification responses.
 * When a notification is tapped, this function handles the navigation to the target screen.
 *
 * @param {object} navigation - The navigation object from React Navigation.
 */
export const setNotificationResponseListener = (navigation) => {
  Notifications.addNotificationResponseReceivedListener((response) => {
    const { id } = response.notification.request.content.data;
    if (id) {
      navigation.navigate('quotePage', { id }); // Navigate to the target screen with the ID
    }
  });
};
