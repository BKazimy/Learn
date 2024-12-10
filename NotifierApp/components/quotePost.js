import { View, Text, StyleSheet } from "react-native";
import colors from "../vars/color";

function QuotePost({ quote, author, story }) {
    return <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <Text style={[styles.text, styles.quoteText]}>"{quote}"</Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={[styles.text]}>- {author}</Text>
        </View>
        <View style={[styles.innerContainer, styles.storyContainer]}>
            <Text style={[styles.text, styles.storyText]}>{story}</Text>
        </View>
    </View>
}

export default QuotePost;

const styles = StyleSheet.create({
    outerContainer:{
        padding: 4,
        paddingHorizontal: 10,
        flex: 1,
    },

    innerContainer: {
        marginVertical: 2,
    },

    storyContainer: {
        marginTop: 4,
    },
    
    text: {
        color: colors.khaki,
    },

    quoteText: {
        fontSize: 32,
    },

    authorText: {
        fontSize: 28,
        opacity: 0.9,
        fontStyle: 'italic',
    },

    storyText: {
        fontSize: 24,
    },

})