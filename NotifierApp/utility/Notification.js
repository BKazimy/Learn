import * as Notifications from 'expo-notifications';
import { useQuoteContext } from '../tools/quoteOfDay';  // Import the context to access the id

export const scheduleNotification = async (navigation) => {
    // Access the id from context
    const { id } = useQuoteContext();

    // Request notification permissions
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === 'granted') {
        // Cancel all previous notifications (optional)
        await Notifications.cancelAllScheduledNotificationsAsync();

        // Define the trigger time for the daily notification
        const trigger = {
            hour: 2,
            minute: 58,
            repeats: true,  // Repeats every day
        };

        // Schedule the notification
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Daily Quote',
                body: 'Tap to read today\'s inspiration!',
                data: { id: id },  // Pass the id of the quote to the notification data
            },
            trigger,
        });
    }
};

// Handle notification response
Notifications.addNotificationResponseReceivedListener(response => {
    const { id } = response.notification.request.content.data;  // Retrieve the id from the notification's data
    // Navigate to the QuotePage screen and pass the id
    navigation.navigate('quotePage', { id: id });
});
