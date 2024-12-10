import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export const scheduleNotification = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
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
                data: { withSome: 'data' },
            },
            trigger,
        });
    }
};
