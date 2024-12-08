import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import AllQuote from './screens/AllQuotaScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllQuotes" component={AllQuote} />
      <Stack.Screen name="AllQuotes" component={AllQuote} />
      <Stack.Screen name="AllQuotes" component={AllQuote} />
      <Stack.Screen name="AllQuotes" component={AllQuote} />
    </Stack.Navigator>
  );
}

export default App;