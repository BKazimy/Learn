import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

function QuotePost({ route, navigation }) {
    const data = route.params

    useLayoutEffect(() => {
        
    })

    return <View>
        <Text>{id}</Text>
        <Text>{quote}</Text>
        <Text>{author}</Text>
        <Text>{story}</Text>
    </View>
}

export default QuotePost;