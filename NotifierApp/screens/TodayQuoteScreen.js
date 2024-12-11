import { StyleSheet } from "react-native";
// import { useQuoteContext, QuoteContext } from "../tools/quoteOfDay";

import Display from "../components/display";
import QuotePost from "../components/quotePost";
import { useLayoutEffect } from "react";
// import Entries from "../tools/data";

function Todays({ navigation }) {
    const quoteData = {
        id: 1,
        quote: "Never eat the pitza with pinapple!",
        author: "Arthor Hill",
        story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        source: 'abc',
    }

    useLayoutEffect(() => {
        v
    })

    return (
            <Display customStyle={styles.quotePost}>
                <QuotePost 
                    id={quoteData.id}
                    quote={quoteData.quote}
                    author={quoteData.author}
                    story={quoteData.story}
                    source={quoteData.source}
                />
            </Display>
    )
}

export default Todays;

const styles = StyleSheet.create({
    quotePost: {
        height: 500,
        borderRadius: 12,
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