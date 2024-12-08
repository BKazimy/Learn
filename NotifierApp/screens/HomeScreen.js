import { View, StyleSheet } from "react-native";
import CompButton from "../components/compButton";

function Home({ navigation }) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
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
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    outerContainer: {
        marginTop: 15,
        padding: 25,
        justifyContent: 'center',
        // alignItems: 'center',

        borderColor: 'yellow',
        borderWidth: 1,
    },

    innerContainer: {
        // flex:1,
        borderColor: 'red',
        borderWidth: 1,
        width: "%80",
        maxWidth: 720,
    }    
})