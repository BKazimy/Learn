import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";

function IconButton({ onPress, icon, color }) {
    return <Pressable 
        onPress={() => {
            
        }} 
        style={({pressed}) => [
            pressed && styles.pressed,
            { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
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