import { View, Text, StyleSheet } from "react-native";
import colors from "../vars/color";
import { useLayoutEffect } from "react";

function QuotePost({ id, navigation }) {

    // change with propper id fetcher function later
    const quoteData = {
        id: 1,
        quote: "Never eat the pitza with pinapple!",
        author: "Arthor Hill",
        story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        source: 'abc',
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: quoteData.author,
        })
    }, [quoteData, navigation]);

    return <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <Text style={[styles.text, styles.quoteText]}>{quoteData.quote}</Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={[styles.text, styles.authorText]}>- {quoteData.author}: {quoteData.source}</Text>
        </View>
        <View style={[styles.innerContainer, styles.storyContainer]}>
            <Text style={[styles.text, styles.storyText]}>{quoteData.story}</Text>
        </View>
    </View>
}

export default QuotePost;

const styles = StyleSheet.create({
    outerContainer:{
        padding: 4,
        paddingHorizontal: 10,
        flex: 1,
    },

    innerContainer: {
        marginVertical: 1,
    },

    storyContainer: {
        marginTop: 6,
    },
    
    text: {
        color: colors.khaki,
    },

    quoteText: {
        fontSize: 24,
    },

    authorText: {
        fontSize: 20,
        color: colors.darkKhaki,
        fontStyle: 'italic',
    },

    storyText: {
        fontSize: 18,
    },

})