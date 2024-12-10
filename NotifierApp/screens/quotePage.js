import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import Display from "../components/display";
import QuotePost from "../components/quotePost";
import colors from "../vars/color";

function QuotePage({ route, navigation }) {
    const quoteData = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: quoteData.author
        })
    }, []);

    return <Display customStyle={styles.quotePost}>
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
    quotePost: {
        height: 500,
        borderRadius: 8,
        backgroundColor: colors.darkOliveGreen,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 16,
        overflow: 'hidden',
        padding: 8,
        
    }
})