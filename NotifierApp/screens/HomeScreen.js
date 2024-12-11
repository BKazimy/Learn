import { View } from "react-native";
import CompButton from "../components/compButton";
import Display from "../components/display";



function Home({ navigation }) {
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
                {/* <View>
                    <CompButton 
                    title="Schedule Notification"
                    onPress={() => navigation.navigate('schedule')}
                    />
                </View> */}
                <View>
                    <CompButton 
                    title="Random Quote"
                    onPress={() => navigation.navigate('quotePage')}
                    />
                </View>
                <View>
                    <CompButton 
                    title="Today's Quote"
                    onPress={() => navigation.navigate('quotePage', {id: 6})}
                    />
                </View>
        </Display>
    );
}

export default Home;