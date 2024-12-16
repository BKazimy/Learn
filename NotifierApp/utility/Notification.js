// // utility/Notification.js
// import * as Notifications from 'expo-notifications';
// import db from './db';

// // Configure the notification handler to determine how notifications should behave
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// const navigation = useNavigation;

// export const SendNotification = async (title, body, id, trigger = null) => {
//   try {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title,
//         body,
//         data: { id }, // Attach the ID to the notification data
//       },
//       trigger,
//     });
//   } catch (error) {
//     console.error('Error scheduling notification:', error);
//   }
// };

export const ScheduleNotification = async () => {
  try {
    // Cancel all existing notifications
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Access the current quote ID from the database
    const id = await db.SetQuoteOfDay();
    if (!id) {
      console.error('No ID found in context.');
      return;
    }

    // Fetch the quote details from the database
    const quoteData = await db.getById(id);
    if (!quoteData) {
      console.error('No quote data found for the ID', id);
      return;
    }

    const { quote: title, story: body } = quoteData;

    // Schedule the new notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: { id },
      },
      trigger: { hour: 8, minute: 15, repeats: true },
    });

    console.log('Dynamic daily notification scheduled!');
  } catch (error) {
    console.error('Error scheduling dynamic daily notification:', error);
  }
};