import { View, Text } from "react-native";

function QuotePost({ quote, author, story }) {
    return <View>
        <Text>{quote}</Text>
        <Text>{author}</Text>
        <Text>{story}</Text>
    </View>
}

export default QuotePost;