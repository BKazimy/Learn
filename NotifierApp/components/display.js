import { View, StyleSheet } from "react-native";

function Display({ children, customStyle }) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.outerContainer}>
                <View style={customStyle}>
                    {children}
                </View>
            </View>
        </View>
    );
}

export default Display;

const styles = StyleSheet.create({
    rootContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    outerContainer: {
        // flex: 1,
        width: '80%',
        maxWidth: 520,
        minWidth: 300,
        margin: 2,

        borderColor: 'red',
        borderWidth: 1,
    },
})