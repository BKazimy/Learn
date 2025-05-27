import { StyleSheet, View, Pressable, Text, Platform } from "react-native";

function Submission({ onCancel, onSave }) {
    return (
        <View style={styles.container}>
          <View style={styles.mealItem}>
              <Pressable 
                  onPress={onCancel}
                  android_ripple={{ color: '#ccc' }}
                  style={({ pressed }) => (pressed ? styles.buttonPress : null)}
              >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Cancel</Text>
                </View>
              </Pressable>
          </View>
          <View style={styles.mealItem}>
              <Pressable 
                  onPress={onSave}
                  android_ripple={{ color: '#ccc' }}
                  style={({ pressed }) => (pressed ? styles.buttonPress : null)}
              >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Save</Text>
                </View>
              </Pressable>
          </View>
          
        </View>
    );
}

export default Submission;

const styles = StyleSheet.create({
  
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        flex: 1,
    },

    innerContainer: {
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkOliveGreen,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.khaki,
    },

    buttonPress: {
        opacity: .75,
    },
})