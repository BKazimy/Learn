import { View, Text, Pressable } from "react-native";
import CompButton from "../components/compButton";

function Home({ navigation }) {
    return <View>
        <View>
            <CompButton 
            title="All Quotes"
            onPress={() => navigation.navigate('AllQuotes')}
            />
        </View>
        <View>
            <CompButton 
            title="Save New Quote"
            onPress={() => navigation.navigate('NewQuote')}
            />
        </View>
        <View>
            <CompButton 
            title="Schedule Notification"
            onPress={() => navigation.navigate('Schedule')}
            />
        </View>
        <View>
            <CompButton 
            title="Random Quote"
            onPress={() => navigation.navigate('Random')}
            />
        </View>
        <View>
            <CompButton 
            title="Today's Quote"
            onPress={() => navigation.navigate('Todays')}
            />
        </View>
    </View>
}

export default Home;