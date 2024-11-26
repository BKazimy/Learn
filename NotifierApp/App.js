import { useState } from 'react';
import { 
  StyleSheet, 
  // Text, 
  View, 
  Button,
  // TextInput, 
  // ScrollView, // loads the whole page, good for limited content like articles or so
  FlatList, // handles the iteration, lazy-loads the page and use scrolls, good for dynamic lists
} from 'react-native';

import TodoItem from './components/todoItem';
import TodoInput from './components/todoInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  function openModal() {
    setModalVisibility(true);
  }

  function closeModal() {
    setModalVisibility(false);
  }

  function addTodoHandler(enteredTodoText) {
    if (enteredTodoText) {
      setTodos((todos) => [
        ...todos, 
        {text: enteredTodoText, id: Math.random().toString()},
      ]);
      console.log(todos);
    };
  };

  function deleteTodoHandeler(todoId) {
    console.log("Deleteing id:", todoId);
    setTodos(todos => {
      return todos.filter((todo) => todo.id !== todoId);
    })
  }

  return (
    <>
      <StatusBar style='dark' />

      <View style={styles.appContainer}>
        <Button 
          title="Add new ToDo" 
          color='#036' 
          onPress={openModal}
        />
        
        <TodoInput 
          onAddTodo={addTodoHandler}
          handler={closeModal}
          visible={modalVisibility}
        />

        <View style={styles.toDoContainer}>
          <FlatList
            data={todos.toReversed()}
            renderItem={(itemData) => {
              return <TodoItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteTodoHandeler}
              />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 20,
    // backgroundColor: 'lavender',

    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'stretch',
    flex: 1,

    // borderWidth:1,
    // borderColor: 'red',
  },
  
  toDoContainer: {
    flex: 5,

    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: '5%',

    borderTopWidth: 1,
    borderTopColor: 'gainsboro',
  },

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // dummyStyle: {
  //   margin: 16,
  //   padding: 16,
  //   borderWidth: 2,
  //   borderColor: 'blue',
  // },
});
