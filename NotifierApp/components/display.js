import { View, StyleSheet } from "react-native";

function Display({ children, customStyle }) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.outerContainer}>
                <View style={[styles.innerContainer, customStyle]}>
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
        overflow: 'hidden',
        marginVertical: 8,
    },

    outerContainer: {
        flex: 1,
        width: '80%',
        maxWidth: 520,
        minWidth: 300,

        borderColor: 'red',
        borderWidth2,
    },

    innerContainer: {
        flex: 1,
        borderColor: 'yellow',
        borderWidth: 2,
    },
})