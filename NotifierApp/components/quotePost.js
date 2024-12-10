import { View, Text } from "react-native";

function QuotePost({ route, navigation }) {
    return <View>
        <Text>{id}</Text>
        <Text>{quote}</Text>
        <Text>{author}</Text>
        <Text>{story}</Text>
    </View>
}

export default QuotePost;