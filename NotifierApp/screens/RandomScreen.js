import { StyleSheet } from "react-native";
// import { useQuoteContext, QuoteContext } from "../tools/quoteOfDay";

import Display from "../components/display";
import QuotePost from "../components/quotePost";

function RandomQuote({ navigation }) {

    navigation.navigate('quotePage', {id: 0});
}

export default RandomQuote;