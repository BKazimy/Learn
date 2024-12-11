import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import Schedule from './screens/ScheduleScreen';
import QuotePage from './screens/quotePage';

// Utilities
import { QuoteOfDay } from './utility/quoteOfDay';
import QuoteDatabase from './utility/db';
import colors from './utility/color';
import { sendImmediateNotification } from './utility/Notification';

const Stack = createStackNavigator();
const db = QuoteDatabase;

useEffect(() => {
  sendImmediateNotification();
}, []);

function App() {
  return (
    // Wrap your app in the QuoteOfDay provider to give access to the context throughout your app
    <QuoteOfDay>
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
    </QuoteOfDay>
  );
}

export default App;
