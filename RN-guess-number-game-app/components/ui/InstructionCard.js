import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/colors";

function InstructionCard({ children, style }) {
    return <Text style={[styles.textInstraction, style]}>{children}</Text>
}

export default InstructionCard;

const styles = StyleSheet.create({
    
    textInstraction: {
        color: Colors.secondary101,
        fontFamily: 'open-sans',
        fontSize: 24,
    },

})