import { View, Text, StyleSheet } from "react-native";

function QuotePost({ quote, author, story }) {
    return <View>
        <Text>{quote}</Text>
        <Text>{author}</Text>
        <Text>{story}</Text>
    </View>
}

export default QuotePost;

const styles = StyleSheet.create({
    
})