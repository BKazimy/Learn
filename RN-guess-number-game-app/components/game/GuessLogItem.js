import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNumber, guess}) {
    return <View style={Styles.listItem}>
        <Text style={Styles.itemText}>#{roundNumber}</Text>
        <Text style={Styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>;
}


export default GuessLogItem;

const Styles = StyleSheet.create({
    listItem: {
        // borderColor: Colors.primary101,
        // borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 4,
        // backgroundColor: Colors.secondary505,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: '100%',
        elevation: 4,
        shadowColor: Colors.secondary101,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        // flex: 1,
    },

    itemText: {
        fontFamily: 'open-sans',
        color: Colors.primary303,
        // flex: 1,
    },
})