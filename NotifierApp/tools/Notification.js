import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';
// import * as Notifications from 'expo-notifications';

export const scheduleNotification = async () => {
    // const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
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
                data: { withSome: 'data' },
            },
            trigger,
        });
    }
};
