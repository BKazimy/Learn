import { StyleSheet } from "react-native";
import { QuoteContext, useQuoteContext } from './contexts/IdContext';
import Display from "../components/display";

function Todays() {

    

    return (
        <QuoteContext>
            <Display customStyle={styles.quotePost}>
                <QuotePost 
                    id={quoteData.id}
                    quote={quoteData.quote}
                    author={quoteData.author}
                    story={quoteData.story}
                    source={quoteData.source}
                />
            </Display>
        </QuoteContext>
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