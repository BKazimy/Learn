import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import Display from "../components/display";

function QuotePage({ route, navigation }) {
    const quoteData = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: quoteData.author
        })
    }, []);

    return <Display></Display>
}

export default QuotePage;