import { useLastNotificationResponse } from "expo-notifications";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

function QuotePage({ route, navigation }) {
    const quoteData = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: quoteData.author
        })
    }, []);

    return <View>
        <Text>{quoteData.id}</Text>
        <Text>{quoteData.quote}</Text>
        <Text>{quoteData.author}</Text>
        <Text>{quoteData.story}</Text>
    </View>
}

export default QuotePage;