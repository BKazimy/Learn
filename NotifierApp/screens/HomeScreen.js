import { Linking, View } from "react-native";

// components
import CompButton from "../components/compButton";
import Display from "../components/display";
import { useState, useEffect } from "react";
// import * as Notifications from 'expo-notifications';

function Home({ navigation, route }) {
    const [id, setid] = useState();

    const fetchId = async () => {
        const data = await route.params.db.GetQuoteOfDay();
        setid(data);
    }
    fetchId(); 

    // useEffect(() => {
    // const subscription = Notifications.addNotificationResponseReceivedListener(response => {
    //   const id = response.notification.request.content.data.id;
    //   navigation.navigate('quotePage', {id});
    // });
    // return () => subscription.remove();
    // }, []);
    
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
                    title="New Quote"
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
