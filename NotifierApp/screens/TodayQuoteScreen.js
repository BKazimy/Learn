import { StyleSheet } from "react-native";
// import { useQuoteContext, QuoteContext } from "../tools/quoteOfDay";

import Display from "../components/display";
import QuotePost from "../components/quotePost";
// import Entries from "../tools/data";

function Todays({ navigation }) {
    const id = 1

    console.log(quoteData);

    return (
            <Display customStyle={styles.quotePost}>
                <QuotePost 
                    id={quoteData.id}
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