import { View, Text, Pressable } from "react-native";
import CompButton from "../components/button";

function Home({ navigation }) {
    function screenNavigator() {
        navigation.navigate()
    }
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
            title="All Quotes"
            onPress={() => navigation.navigate('AllQuotes')}
            />
        </View>
    </View>
}

export default Home;