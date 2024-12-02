import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name='Welcome' component={Welcome} />
    </Drawer.Navigator>
  </NavigationContainer>;
}
