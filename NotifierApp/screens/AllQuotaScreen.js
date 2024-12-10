import { View, Text } from "react-native";
import { useState } from "react";

function AllQuote({ navigation }) {
    const [quoteList, setQuoteList] = useState([
        {
            id: 1,
            quote: "blah blah blah ",
            story: ''
        }
    ])
    return <View>
        <Text>All Quotes Screen!</Text>
    </View>
}

export default AllQuote;