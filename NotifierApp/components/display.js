import { View, StyleSheet } from "react-native";

function Display({ children, customStyle }) {
    return (
        <View style={[
                styles.rootContainer,
                // customStyle
            ]}>
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
        
        backgroundColor: colors.darkOliveGreen,
        
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: 'hidden',
    },

    outerContainer: {
        width: '80%',
        maxWidth: 520,
        minWidth: 300,
    },
})