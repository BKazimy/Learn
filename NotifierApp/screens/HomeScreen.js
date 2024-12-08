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
    </View>
}

export default Home;