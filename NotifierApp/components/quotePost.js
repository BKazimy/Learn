import { View, Text } from "react-native";

function QuotePost({ navigation, quote, author, story }) {
    return <View>
        <Text>{quote}</Text>
        <Text>{author}</Text>
        <Text>{quote}</Text>
    </View>
}

export default QuotePost;