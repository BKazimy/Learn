import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

function QuotePost({ route, navigation }) {
    console.log("all done!");
    const quoteData = route.params;

    console.log("all done!");
    useLayoutEffect(() => {
        // navigation.setOptions({
        //     title: quoteData.title
        // })
        console.log(quoteData.quote);
        console.log("all done!");
    }, [navigation, quoteData]);

    console.log("all done!");

    return (
        <View>
            {/* <Text>{route.params}</Text>
            <Text>{quoteData.id}</Text> */}
            <Text>{quoteData.quote}</Text>
            {/* <Text>{quoteData.author}</Text>
            <Text>{quoteData.story}</Text> */}
        </View>
    );
}

export default QuotePost;