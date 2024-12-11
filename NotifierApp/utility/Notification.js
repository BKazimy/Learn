import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native'; // Use navigation hook
import db from './db'; // Import the QuoteDatabase instance
import { useQuoteContext } from './quoteOfDay'; // Import context to access id

export const scheduleNotification = async () => {
    const { id } = useQuoteContext();  // Access id from context
    const navigation = useNavigation(); // Access the navigation instance

    // Mobile Notification (iOS/Android)
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status === 'granted') {
            await Notifications.cancelAllScheduledNotificationsAsync();

            const trigger = {
                hour: 10,
                minute: 0,
                repeats: true,
            };

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Daily Quote',
                    body: 'Tap to read today\'s inspiration!',
                    data: { id }, // Pass the id in the notification's data
                },
                trigger,
            });

            // Handle notification tap
            Notifications.addNotificationResponseReceivedListener(async (response) => {
                if (response.notification.request.content.data.id) {
                    // Get the quote by id when notification is tapped
                    const quoteData = await db.getById(response.notification.request.content.data.id);
                    if (quoteData) {
                        // Navigate to the QuotePage with the quote data
                        navigation.navigate('quotePage', { quote: quoteData });
                    } else {
                        console.error('Quote not found.');
                    }
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
                        body: 'Tap to read today\'s inspiration!',
                        data: { id }, // Pass the id in the notification's data
                        requireInteraction: true,
                    };

                    // Create and show the notification
                    const notification = new Notification('Daily Quote', notificationOptions);

                    // Handle notification click
                    notification.onclick = async (event) => {
                        event.preventDefault();  // Prevent default behavior
                        // Fetch the quote by id
                        const quoteData = await db.getById(notification.data.id);
                        if (quoteData) {
                            // Navigate to the QuotePage with the quote data
                            navigation.navigate('quotePage', { quote: quoteData });
                        } else {
                            console.error('Quote not found.');
                        }
                    };
                }
            });
        }
    }
};
