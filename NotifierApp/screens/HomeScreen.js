import { View, StyleSheet } from "react-native";
import CompButton from "../components/compButton";

function Home({ navigation }) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.outerContainer}>
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
                {/* <View>
                    <CompButton 
                    title="Schedule Notification"
                    onPress={() => navigation.navigate('schedule')}
                    />
                </View> */}
                <View>
                    <CompButton 
                    title="Random Quote"
                    onPress={() => navigation.navigate('random')}
                    />
                </View>
                <View>
                    <CompButton 
                    title="Today's Quote"
                    onPress={() => navigation.navigate('todays')}
                    />
                </View>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    outerContainer: {
        width: '80%',
        maxWidth: 720,
    },
})