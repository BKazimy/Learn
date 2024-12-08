import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';
import NewQuote from './screens/NewQuote';
import Schedule from './screens/ScheduleScreen';
import Random from './screens/RandomScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllQuotes" component={AllQuote} />
      <Stack.Screen name="NewQuote" component={NewQuote} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Randome" component={Random} />
    </Stack.Navigator>
  );
}

export default App;