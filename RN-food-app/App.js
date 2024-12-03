import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { Button } from 'react-native-web';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator 
    screenOptions={{
      headerStyle:{ backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25'},
      drawerContentStyle: { backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}
    // screenOptions={{
    // headerStyle: { backgroundColor: '#351401' },
    // headerTintColor: 'white',
    // contentStyle: { backgroundColor: '#3f2f25' },
  >
    <Drawer.Screen 
      name='Categories'
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => (
          <Ionicons name='list' color={color} size={size} />
        )
      }}
    />
    <Drawer.Screen 
      name='Favorites'
      component={FavoritesScreen}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' },
        }} >
          <Stack.Screen 
            name='MealCategories' 
            component={DrawerNavigator}
            options={{
              // title: "All Categories"
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name='MealOverview' 
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen 
            name='MealDetail' 
            component={MealDetailScreen}
            options={{
              title: "Meal Detail",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


