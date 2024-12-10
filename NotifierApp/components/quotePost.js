import { View, Text, StyleSheet } from "react-native";
import colors from "../vars/color";

function QuotePost({ quote, author, story }) {
    return <View>
        <Text style={styles.title}>{quote}</Text>
        <Text>{author}</Text>
        <Text>{story}</Text>
    </View>
}

export default QuotePost;

const styles = StyleSheet.create({
    title: {
        color: colors.khaki,
    }
})