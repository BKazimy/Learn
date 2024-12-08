import { Pressable } from "react-native"

function CompButton ({ children, onPress }) {
    return (
        <Pressable
            onPress={onPress}
        >
            {children}
        </Pressable>
    );
}

export default CompButton;