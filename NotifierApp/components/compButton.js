import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import colors from "../utility/color";

function CompButton({ title, onPress, subtitle }) {

    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color: colors}}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPress : null,
                ]}  
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.authorText}> -{subtitle}</Text>}
                </View>
            </Pressable>
        </View>
    );
}

export default CompButton;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },

    button: {
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },

    buttonPress: {
        opacity: .75,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkOliveGreen,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.khaki,
    },

    authorText: {
        fontSize: 16,
        color: colors.darkKhaki,
        fontStyle: 'italic',
    },
})