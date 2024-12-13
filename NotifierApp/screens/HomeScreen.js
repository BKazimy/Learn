import { View } from "react-native";

// components
import CompButton from "../components/compButton";
import Display from "../components/display";
import { useLayoutEffect, useState } from "react";

// utilities

function Home({ navigation, route }) {
    const [id, setid] = useState();

    const fetchId = async () => {
        let a = route.params.today;
        // const id = today;
        console.log('home id:', a);
        // console.log('home today:', today);
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
                    onPress={() => navigation.navigate('quotePage', {id})}
                />
            </View>
        </Display>
    );
}

export default Home;
