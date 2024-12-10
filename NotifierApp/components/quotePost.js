import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

function QuotePost({ route, navigation }) {
    const quotedata = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            title: quotedata.title
        })
    })

    return <View>
        <Text>{quotedata.id}</Text>
        <Text>{quotedata.quote}</Text>
        <Text>{quotedata.author}</Text>
        <Text>{quotedata.story}</Text>
    </View>
}

export default QuotePost;