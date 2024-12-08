import { Pressable } from "react-native"

function CompButton ({ children }) {
    return (
        <Pressable
            onPress
        >
            {children}
        </Pressable>
    );
}