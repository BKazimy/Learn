import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { View } from "react-native";


export default function App() {
    return (
        
        <StatusBar style="auto" />
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