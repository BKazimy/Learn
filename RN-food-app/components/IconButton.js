import { Ionicons } from "@expo/vector-icons";
import { Button, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function IconButton({ onPress, icon, color }) {
    return <Button 
        onPress={onPress} 
        style={{ padding: 20, backgroundColor: 'red' }}
        // style={({pressed}) => [
        //     pressed && styles.pressed,
        //     { borderWidth: 2, borderColor: 'blue', padding: 10 },
        // ]}
        title="Add"
    />
        {/* <Ionicons name={icon} size={24} color={color} />
    </Button> */}
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})