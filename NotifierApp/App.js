import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllQuotes" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default App;