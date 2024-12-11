import { View, Text } from "react-native";
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