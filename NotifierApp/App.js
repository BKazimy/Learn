import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import Schedule from './screens/ScheduleScreen';
import Random from './screens/RandomScreen';
import Todays from './screens/TodayQuoteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
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
          options={{
            title: 'All Quotes',
          }}
        />
        <Stack.Screen 
          name="newquote" 
          component={NewQuote} 
          options={{
            title: 'Write New Quote',
          }}
        />
        <Stack.Screen 
          name="schedule" 
          component={Schedule} 
          options={{
            title: "Schedule Quote Notification",
          }}
        />
        <Stack.Screen 
          name="random" 
          component={Random} 
          options={{
            title: "Random Quote",
          }}
        />
        <Stack.Screen 
          name="todays" 
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