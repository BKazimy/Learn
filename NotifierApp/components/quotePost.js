import { View, Text, StyleSheet } from "react-native";
import colors from "../vars/color";

function QuotePost({ quote, author, story }) {
    return <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <Text style={[styles.text]}>{quote}</Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={[styles.text]}>{author}</Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={[styles.text]}>{story}</Text>
        </View>
    </View>
}

export default QuotePost;

const styles = StyleSheet.create({
    outerContainer:{
        padding: 8,

        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
    },

    innerContainer: {
        margin: 4,

        borderColor: 'yellow',
        borderWidth: 1,
    },
    
    text: {
        color: colors.khaki,
    },

    

})