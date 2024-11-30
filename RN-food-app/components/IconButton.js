import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function IconButton({ onPress}) {
    return <Pressable on>
        <Ionicons name="star" size={24} color="white" />
    </Pressable>
}

export default IconButton;