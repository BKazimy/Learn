import { Linking, View } from "react-native";

// components
import CompButton from "../components/compButton";
import Display from "../components/display";
import { useLayoutEffect, useState } from "react";
import { CommonActions } from "@react-navigation/native";

function Home({ navigation, route }) {
    const [id, setid] = useState();

    const fetchId = async () => {
        const data = await route.params.db.GetQuoteOfDay();
        setid(data);
    }
    fetchId(); 
    console.log('home usestate id:', id);

    return (
        <Display>
            <View>
                <CompButton 
                    title="Write New Quote"
                    onPress={() => navigation.replace('newquote')}
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
            <View>
                <CompButton 
                    title="All Quotes"
                    onPress={() => navigation.navigate('allquotes')}
                />
            </View>
            <View>
                <CompButton 
                    title="Report an Issue"
                    onPress={() => Linking.openURL('https://www.instagram.com/b_kazimy_')}
                />
            </View>
        </Display>
    );
}

export default Home;
