import { Pressable } from "react-native"

function CompButton ({ onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPress : null,
                ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CompButton;