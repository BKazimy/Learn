import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

function QuotePost({ route, navigation }) {
    const data = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            title: data.title
        })
    })

    return <View>
        <Text>{data.id}</Text>
        <Text>{data.quote}</Text>
        <Text>{data.author}</Text>
        <Text>{data.story}</Text>
    </View>
}

export default QuotePost;