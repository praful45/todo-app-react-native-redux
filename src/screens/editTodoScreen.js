import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {EditTodo} from '../components/todos/editTodo';

export const EditScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.view}>
      <EditTodo route={route.params} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#23272f',
  },
});
