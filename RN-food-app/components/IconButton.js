import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";

function IconButton({ onPress, icon, color }) {
    return <Pressable onPress={onPress}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create