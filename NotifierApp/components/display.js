import { View, StyleSheet } from "react-native";
import CompButton from "../components/compButton";

function Display({ children }) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.outerContainer}>
                {children}
            </View>
        </View>
    );
}

export default Display;