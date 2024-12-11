import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import CompButton from "../components/compButton";

function AllQuote({ navigation, route }) {
    const { db } = route.params;
    const [data, setData] = useState([]); // State for storing quotes
    const [isLoading, setIsLoading] = useState(true); // State for loading status

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const quotes = await db.getAll(); // Fetch all quotes
                setData(quotes); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching quotes:", error);
            } finally {
                setIsLoading(false); // Stop loading spinner
            }
        };

        fetchData();
    }, [db]); // Dependency array

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("quotePage", {
                id: itemData.item.id,
            });
        }

        return (
            <CompButton
                title={itemData.item.quote}
                subtitle={itemData.item.author}
                onPress={pressHandler}
            />
        );
    }

    // Show a loading state while fetching data
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <CompButton title="Loading..." />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()} // Ensure `id` is a string
                renderItem={renderCategoryItem}
                numColumns={1}
                contentContainerStyle={{ paddingBottom: 10 }}
                style={styles.flatlist}
                scrollEnabled={true}
            />
        </View>
    );
}

export default AllQuote;

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        marginVertical: 8,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
