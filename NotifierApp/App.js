import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import Schedule from './screens/ScheduleScreen';
import Random from './screens/RandomScreen';
import Todays from './screens/TodayQuoteScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen 
          name="AllQuotes" 
          component={AllQuote} 
          options={{
            title: 'All Quotes',
          }}
        />
        <Stack.Screen 
          name="NewQuote" 
          component={NewQuote} 
          options={{
            title: 'Save New Quote',
          }}
        />
        <Stack.Screen 
          name="Schedule" 
          component={Schedule} 
          options={{
            title: "Schedule Quote Notification",
          }}
        />
        <Stack.Screen 
          name="Random" 
          component={Random} 
          options={{
            title: "Random Quote",
          }}
        />
        <Stack.Screen 
          name="Todays" 
          component={Todays} 
          options={{
            title: "Today's Quote",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;