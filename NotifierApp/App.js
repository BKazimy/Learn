import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import Schedule from './screens/ScheduleScreen';
import QuotePage from './screens/quotePage';

import QuoteDatabase from './tools/db';
import colors from './vars/color';

const Stack = createStackNavigator();
const db = QuoteDatabase;

function App() {
  return (
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
  );
}

export default App;