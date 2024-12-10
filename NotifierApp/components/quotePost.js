import { View, Text, StyleSheet } from "react-native";
import colors from "../vars/color";

function QuotePost({ quote, author, story }) {
    return <View>
        <Text style={[styles.text]}>{quote}</Text>
        <Text style={[styles.text]}>{author}</Text>
        <Text style={[styles.text]}>{story}</Text>
    </View>
}

export default QuotePost;

const styles = StyleSheet.create({
    text: {
        color: colors.khaki,
    }
})