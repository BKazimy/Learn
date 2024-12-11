import { StyleSheet } from "react-native";
// import { useQuoteContext, QuoteContext } from "../tools/quoteOfDay";


function RandomQuote({ navigation }) {

    navigation.navigate('quotePage', {id: 0});
}

export default RandomQuote;