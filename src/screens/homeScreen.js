import React from 'react';
import {TodosList} from '../components/todos/todosList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';
import {AddTodo} from '../components/todos/addTodo';
import {Divider} from '../components/divider';

export const HomeScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <AddTodo route={route.params} />
        <Divider />
        <Text style={styles.subtitle}>Todos</Text>
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
