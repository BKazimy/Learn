import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem(props) {

    return (
        <View style={styles.todoItem}>
            <Pressable 
                onPress={props.onDelete.bind(this, props.id)}
                android_ripple={{color: '#c00'}} // only for android
                style={({pressed})=> pressed && styles.pressedItem} // os independant, cant stand alon on android
            >
                <Text style={styles.todoText}>
                    {props.id}_{props.text}
                </Text>
            </Pressable>
        </View>
    );
}

export default TodoItem;

const styles = StyleSheet.create({

  todoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'green',
    // color: 'white', // Style inheritence is not supported in react
  },
  
  todoText: {
    color: 'white',
    padding: 8,
  },

  pressedItem: {
    color: 'maroon',
    // opacity: 1,
  }
})