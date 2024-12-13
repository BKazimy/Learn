import { View } from "react-native";

// components
import CompButton from "../components/compButton";
import Display from "../components/display";

// utilities

function Home({ navigation, route }) {
    use
    const { today } = route.params;
    const id = today;
    console.log('home id:', id);

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
                    onPress={() => navigation.navigate('quotePage', {id})}
                />
            </View>
        </Display>
    );
}

export default Home;
