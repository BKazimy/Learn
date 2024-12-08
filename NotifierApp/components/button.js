import { Pressable } from "react-native"

function CompButton ({ onPress }) {
    return (
        <Pressable
            onPress={onPress}
        />
    );
}

export default CompButton;