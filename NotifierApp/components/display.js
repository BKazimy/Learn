import { View, StyleSheet } from "react-native";

function Display({ children, cus }) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.outerContainer}>
                {children}
            </View>
        </View>
    );
}

export default Display;

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    outerContainer: {
        width: '80%',
        maxWidth: 520,
        minWidth: 300,
    },
})