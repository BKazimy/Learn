import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";

import Display from "../components/display";
import QuotePost from "../components/quotePost";

// utilities
import colors from "../utility/color";
import { SendNotification } from "../utility/Notification";
// import { NavigationActions, StackActions } from 'react-navigation';

function QuotePage({ route, navigation }) {
    const { db, id } = route.params;
    const [quoteData, setQuoteData] = useState(null); // State to store the fetched data


    // const resetAction = StackActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({ routeName: 'home' })],
    // });

    useEffect(() => {
        // Add a listener for the 'beforeRemove' event
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
          // Get the navigation state
          const state = navigation.getState();
    
          // Check the previous route, if any
          const previousRoute =
            state.routes[state.index - 1] || null; // Check if there's a previous route
    
          if (previousRoute?.name === 'newquote') {
            // Prevent the default back action
            e.preventDefault();
    
            console.log('Came from newQuote, navigating to home.');
            // navigation.navigate('home'); // Navigate to home
            navigation.navigate('home')
            console.log('went home!');
          } else {
            console.log('Default goBack behavior triggered.');
            // navigation.dispatch(e.data.action); // Allow the default back action
            navigation.dispatch(StackActions.popToTop());
        }
        });
    
        // Cleanup the listener when the component unmounts
        return unsubscribe;
    }, [navigation]);

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;
                console.log('id:', id);
                if (id) {
                    console.log('id:', id);
                    data = await db.getById(id); // Fetch quote data
                } else {
                    data = await db.getRandom(); // Fetch quote data
                    console.log('quote:', data.quote);
                    // send the notification for randome Quote
                    await SendNotification(data.quote, data.story, data.id);
                }
                setQuoteData(data); // Update state with fetched data
                
                // Set navigation options after fetching data
                navigation.setOptions({
                    title: data.author || "Quote"
                });
            } catch (error) {
                console.error("Error fetching quote data:", error);
            }
        };

        fetchData();
    }, [db, id, navigation]); // Dependencies

    // Show loading state until data is fetched
    if (!quoteData) {
        return <Display customStyle={styles.quotePost}>Loading...</Display>;
    }

    return (
        <Display customStyle={styles.quotePost}>
            <QuotePost
                id={quoteData.id}
                quote={quoteData.quote}
                author={quoteData.author}
                story={quoteData.story}
                source={quoteData.source}
            />
        </Display>
    );
}

export default QuotePage;

const styles = StyleSheet.create({
    quotePost: {
        height: 500,
        borderRadius: 12,
        backgroundColor: colors.darkOliveGreen,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: 'hidden',
        padding: 8,
    },
});
