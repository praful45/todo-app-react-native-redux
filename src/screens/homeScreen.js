import React from 'react';
import {TodosList} from '../components/todos/todosList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {AddTodo} from '../components/todos/addTodo';
import {Divider} from '../components/divider';
import {useDispatch} from 'react-redux';
import {deleteAllTodos} from '../components/todos/todosSlice';

export const HomeScreen = ({route}) => {
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    Alert.alert('Warning', 'Are you sure to DELETE all the TODOS??', [
      {text: 'OK', onPress: () => dispatch(deleteAllTodos())},
      {text: 'Cancel'},
    ]);
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <AddTodo route={route.params} />
        <Divider />
        <View style={styles.delAllContainer}>
          <Text style={styles.subtitle}>Todos</Text>
          <TouchableOpacity
            style={styles.deleteAll}
            onPress={() => handleDeleteAll()}>
            <Text style={styles.btnTxt}>Delete All</Text>
          </TouchableOpacity>
        </View>

        <TodosList />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#23272f',
  },
  delAllContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 15,
    marginBottom: 10,
  },
  deleteAll: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 8,
    marginRight: 5,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    padding: 6,
  },
});
