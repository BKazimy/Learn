import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import Display from "../components/display";
import QuotePost from "../components/quotePost";

function QuotePage({ route, navigation }) {
    const quoteData = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: quoteData.author
        })
    }, []);

    return <Display>
        <QuotePost 
            id={quoteData.id}
        />
    </Display>
}

export default QuotePage;