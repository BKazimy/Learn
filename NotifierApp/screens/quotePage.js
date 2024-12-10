import { View, Text } from "react-native";

function QuotePage({ id, quote, author, story }) {
    return <View>
        <Text>{id}</Text>
        <Text>{quote}</Text>
        <Text>{id}</Text>
        <Text>{id}</Text>
    </View>
}

export default QuotePage;