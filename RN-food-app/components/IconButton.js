import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function IconButton() {
    return <Pressable>
        <Ionicons name="star" size={24} color="white" />
    </Pressable>
}