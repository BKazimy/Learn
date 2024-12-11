import { View, Text } from "react-native";
import CompButton from "../components/compButton";
import Display from "../components/display";
import { useQuoteContext } from "../utility/quoteOfDay";

function Home({ navigation }) {
    const { id } = useQuoteContext();

    

    // Handle the case where id might be undefined
    if (id === undefined) {
        console.log('id undefined!');
    }

    return (
        <Display>
            <View>
                <CompButton 
                    title="All Quotes"
                    onPress={() => navigation.navigate('allquotes')}
                />
            </View>
            <View>
                <CompButton 
                    title="Write New Quote"
                    onPress={() => navigation.navigate('newquote')}
                />
            </View>
            <View>
                <CompButton 
                    title="Random Quote"
                    onPress={() => navigation.navigate('quotePage')}
                />
            </View>
            <View>
                <CompButton 
                    title="Today's Quote"
                    onPress={() => navigation.navigate('quotePage', { id })}
                />
            </View>
        </Display>
    );
}

export default Home;
