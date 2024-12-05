import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();



export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    
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