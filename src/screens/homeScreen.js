import React from 'react';
import {TodosList} from '../components/todos/todosList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import FlatEg from '../components/todos/todo';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.view}>
      <TodosList />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#23272f',
  },
});
