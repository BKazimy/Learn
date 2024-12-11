import { View, Text } from "react-native";
import { QuoteContext, useQuoteContext } from './contexts/IdContext';
import Display from "../components/display";

function Todays() {
    return (
        <QuoteContext>
            <Display>
                
            </Display>
        </QuoteContext>
    )
}

export default Todays;