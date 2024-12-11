import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import Display from "../components/display";
import QuotePost from "../components/quotePost";
import colors from "../vars/color";

function QuotePage({ route, navigation }) {
    const { db, id } = route.params;
    const [quoteData, setQuoteData] = useState(null); // State to store the fetched data

    if (id){
        console.log('id:', id);
    } else {
        console.log('no id');
    }
    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;
                if (id) {
                    data = await db.getById(id); // Fetch quote data
                } else {
                    const data = await db.getRandom(); // Fetch quote data
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
