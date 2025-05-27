import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({ children, pressed }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed 
                        ? [styles.pressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer}
                onPress={pressed}
                android_ripple={{color: Colors.primary202}}
            >
                <Text
                    style={styles.buttonText}
                >
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        marginTop: 8,
        overflow: 'hidden',
        borderRadius: 28,
        // borderColor: 'red',
        // borderWidth: 1,
    },

    buttonInnerContainer: {
        backgroundColor: Colors.primary101,
        elevation: 2,
        padding: 5,
    },

    buttonText: {
        color: Colors.secondary101,
        textAlign: "center",
        fontWeight: 'bold',
        // fontSize: 15,
    },

    pressed: {
        opacity: 0.75,
    }
})