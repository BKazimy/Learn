import { View, Text, StyleSheet } from "react-native";
import colors from "../vars/color";

function QuotePost({ quote, author, story }) {
    return <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <Text style={[styles.text, styles.quoteText]}>{quote} -<Text style={[styles.text, styles.authorText]}>{author}</Text></Text>
        </View>
        {/* <View style={styles.innerContainer}>
            <Text style={[styles.text]}>{author}</Text>
        </View> */}
        <View style={styles.innerContainer}>
            <Text style={[styles.text, styles.storyText]}>{story}</Text>
        </View>
    </View>
}

export default QuotePost;

const styles = StyleSheet.create({
    outerContainer:{
        padding: 6,
        paddingVertical: 4,
        flex: 1,
    },

    innerContainer: {
        margin: 4,
    },
    
    text: {
        color: colors.khaki,
    },

    quoteText: {
        fontSize: 16,
    },

    authorText: {
        fontSize: 14,
        opacity: 0.9,
    },

    storyText: {
        fontSize: 12,
    },

})