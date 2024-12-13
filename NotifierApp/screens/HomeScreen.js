import { View } from "react-native";

// components
import CompButton from "../components/compButton";
import Display from "../components/display";
import { useLayoutEffect, useState } from "react";

// utilities

function Home({ navigation, route }) {
    const [id, setid] = useState();

    const fetchId = async () => {
        const data = await route.paramms.GetQuoteOfDay();
        // const { today } = route.params;
        // const data = today;
        // console.log('home today:', a);
        console.log('home data id:', data);
        setid(data);
    }
    fetchId(); 
    console.log('home usestate id:', id);

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
