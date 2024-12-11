import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native'; // Use navigation hook
import db from './db'; // Import the QuoteDatabase instance
import { useQuoteContext } from './quoteOfDay'; // Import context to access id

export const sendImmediateNotification = async () => {
    const { id } = useQuoteContext();  // Access id from context
    const navigation = useNavigation(); // Access the navigation instance

    // Fetch the quote data by ID
    const quoteData = await db.getById(id);
    if (!quoteData) {
        console.error('Quote not found');
        return;
    }

    const { quote, author } = quoteData;  // Destructure the quote and author

    // Mobile Notification (iOS/Android)
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status === 'granted') {
            // Send the notification immediately
            await Notifications.cancelAllScheduledNotificationsAsync();

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: quote,  // Use the quote text as the title
                    body: author,   // Use the author as the body
                    data: { id },   // Pass the id in the notification's data
                },
                trigger: null, // No trigger, just immediate notification
            });

            // Handle notification tap
            Notifications.addNotificationResponseReceivedListener(async (response) => {
                if (response.notification.request.content.data.id) {
                    // Get the quote by id when notification is tapped
                    const quoteId = response.notification.request.content.data.id;
                    // Navigate to the QuotePage with the id
                    navigation.navigate('quotePage', { id: quoteId });
                }
            });
        }
    }
    // Web Notification
    else if (Platform.OS === 'web') {
        // Request permission for notifications
        if ('Notification' in window) {
            Notification.requestPermission().then(async (permission) => {
                if (permission === "granted") {
                    const notificationOptions = {
                        body: author,  // Use the author as the body
                        title: quote,   // Pass the quote as the title
                        data: { id },   // Pass the id in the notification's data
                        requireInteraction: true,
                    };

                    // Create and show the notification immediately
                    const notification = new Notification(quote, notificationOptions);  // Use the quote as the title

                    // Handle notification click
                    notification.onclick = (event) => {
                        event.preventDefault();  // Prevent default behavior
                        // Navigate to the QuotePage with the id
                        navigation.navigate('quotePage', { id: notification.data.id });
                    };
                }
            });
        }
    }
};
