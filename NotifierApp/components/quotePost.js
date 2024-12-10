import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

function QuotePost({ route, navigation }) {
    console.log("lets go");
    const quoteData = route.params;

    console.log("ready");
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Quote Pa"
        })
        console.log(quoteData.quote);
        console.log("all done!");
    }, []);

    console.log("good to go");

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