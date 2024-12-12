import React, { useEffect, useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// Screens
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import QuotePage from './screens/quotePage';

// Utilities
import db from './utility/db';
import colors from './utility/color';
import { ScheduleNotification, setNotificationResponseListener } from './utility/Notification';

const Stack = createStackNavigator();

function App() {
  const navigation = useNavigation;

  useLayoutEffect(() => {
    const id = db.SetQuoteOfDay();
    console.log('id in app.js:', id);
    setNotificationResponseListener(navigation);

    const checkAndScheduleNotification = async () => {
      try {
        const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
        if (scheduledNotifications.length === 0) {
          await ScheduleNotification(db);
        }
      } catch (error) {
        console.error('Error checking scheduled notifications:', error);
      }
    };

    checkAndScheduleNotification();
  }, []);

  return (
    // Wrap your app in the QuoteOfDay provider to give access to the context throughout your app
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.darkOliveGreen,
            },
            headerTintColor: colors.khaki,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="home" 
            component={Home} 
            initialParams={{ id }}
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
              title: "Quote Page",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
