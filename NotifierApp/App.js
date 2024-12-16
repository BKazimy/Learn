import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigation,
  DefaultTheme,
} from '@react-navigation/native';
// import { getAllScheduledNotificationsAsync } from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import QuotePage from './screens/quotePage';

// Utilities
import db from './utility/db';
import colors from './utility/color';
// import { ScheduleNotification } from './utility/Notification';

const Stack = createStackNavigator();
const navigation = useNavigation;

const b = async () => {
  let a = await db.GetQuoteOfDay();
  if (!a) {
    await db.SetQuoteOfDay();
  }
};
b();

function App() {
  useEffect(() => {
    const checkAndScheduleNotification = async () => {
      try {
        const scheduledNotifications =
          await getAllScheduledNotificationsAsync();
        if (scheduledNotifications.length === 0) {
          await ScheduleNotification();
        }
      } catch (error) {
        console.error('Error checking scheduled notifications:', error);
      }
    };

    checkAndScheduleNotification();
  }, [navigation]);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.gainsboro,
    },
  };

  return (
        // Wrap your app in the QuoteOfDay provider to give access to the context throughout your app
        <NavigationContainer theme={MyTheme}>
          <StatusBar style="dark" />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.darkOliveGreen,
              },
              headerTintColor: colors.khaki,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              name="home"
              component={Home}
              initialParams={{ db }}
              options={{
                title: 'Home',
              }}
            />
            <Stack.Screen
              name="allquotes"
              component={AllQuote}
              initialParams={{ db }}
              options={{
                title: 'All Quotes',
              }}
            />
            <Stack.Screen
              name="newquote"
              component={NewQuote}
              initialParams={{ db }}
              options={{
                title: 'Write New Quote',
              }}
            />
            <Stack.Screen
              name="quotePage"
              component={QuotePage}
              initialParams={{ db }}
              options={{
                title: 'Quote Page',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;
