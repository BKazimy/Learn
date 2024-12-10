import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import Display from "../components/display";
import QuotePost from "../components/quotePost";

function QuotePage({ route, navigation }) {
    const quoteData = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: quoteData.author
        })
    }, []);

    return <Display style={StyleSheet}>
        <QuotePost 
            id={quoteData.id}
            quote={quoteData.quote}
            author={quoteData.author}
            story={quoteData.story}
        />
    </Display>
}

export default QuotePage;

const styles = StyleSheet.create({
    quotePost
})