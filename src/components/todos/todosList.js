import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {AddTodo} from './addTodo';
import {useSelector} from 'react-redux';
import {getTodos} from './todosSlice';
import {Divider} from '../divider';
import {TodoItem} from './todo';

export const TodosList = () => {
  const todos = useSelector(getTodos);

  const renderItem = ({item}) => {
    return <TodoItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <AddTodo />
      <Divider />
      <Text style={styles.subtitle}>Todos</Text>
      <FlatList
        style={styles.flatList}
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingBottom: 25,
    height: '72%',
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
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 15,
    marginBottom: 10,
  },
});
