import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";

function IconButton({ onPress, icon, color }) {
    return <Pressable 
        onPressIn={onPress} 
        style={({pressed}) => [
            pressed && styles.pressed,
        ]}
    >
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})