import { useLastNotificationResponse } from "expo-notifications";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

function QuotePage({ route, navigation }) {
    const quoteData = route.params;

    useLayoutEffect(() => {
        setOptions
    })

    return <View>
        <Text>{id}</Text>
        <Text>{quote}</Text>
        <Text>{author}</Text>
        <Text>{story}</Text>
    </View>
}

export default QuotePage;