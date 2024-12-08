import { Pressable } from "react-native"

function CompButton ({ children, onPress }) {
    return (
        <Pressable
            onPress={onPress}
        />
    );
}

export default CompButton;