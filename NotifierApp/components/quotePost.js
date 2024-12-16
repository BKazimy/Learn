import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../utility/color";

function QuotePost({ quote, author, story, source }) {
    return <ScrollView style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <Text style={[styles.text, styles.quoteText]}>{quote}</Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={[styles.text, styles.authorText]}>- {author}</Text>
            <Text style={[styles.text, styles.sourceText]}>{source}</Text>
        </View>
        <View style={[styles.innerContainer, styles.storyContainer]}>
            <Text style={[styles.text, styles.storyText]}>{story}</Text>
        </View>
    </ScrollView>
}

export default QuotePost;

const styles = StyleSheet.create({
    outerContainer:{
        padding: 4,
        paddingHorizontal: 10,
        flex: 1,
    },

    innerContainer: {
        marginVertical: 1,
    },

    storyContainer: {
        marginTop: 6,
    },
    
    text: {
        color: colors.khaki,
    },

    quoteText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    sourceText: {
        fontSize: 16,
        color: colors.darkKhaki,
    },

    authorText: {
        fontSize: 16,
        color: colors.darkKhaki,
        fontStyle: 'italic',
    },

    storyText: {
        fontSize: 18,
    },

})