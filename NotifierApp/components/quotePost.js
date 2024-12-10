import { View, Text, StyleSheet } from "react-native";
import colors from "../vars/color";

function QuotePost({ quote, author, story }) {
    return <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <Text style={[styles.text]}>{quote}</Text>
        </View>
        <View style={styles.innerContainer}></View>
            <Text style={[styles.text]}>{author}</Text>
        <View style={styles.innerContainer}></View>
            <Text style={[styles.text]}>{story}</Text>
    </View>
}

export default QuotePost;

const styles = StyleSheet.create({
    outerContainer:{
        padding: 8,

        borderColor: 'red',
        borderWidth: 1,
    },

    innerContainer: {
        margin: 4,
    },
    
    text: {
        color: colors.khaki,

    },

})