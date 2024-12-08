import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import Schedule from './screens/ScheduleScreen';
import Random from './screens/RandomScreen';
import Todays from './screens/TodayQuoteScreen';

const Stack = createStackNavigator();

function App() {
  return (
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
          title: 'New Quotes'
        }}
      />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Randome" component={Random} />
      <Stack.Screen name="Todays" component={Todays} />
    </Stack.Navigator>
  );
}

export default App;