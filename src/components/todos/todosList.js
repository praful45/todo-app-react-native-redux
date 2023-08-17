import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {getTodos} from './todosSlice';
import {TodoItem} from './todo';

export const TodosList = ({}) => {
  const todos = useSelector(getTodos);

  const renderItem = ({item}) => {
    return <TodoItem item={item} />;
  };

  return (
    <FlatList
      style={styles.flatList}
      data={todos}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'} //for not closing the keyboard when pressed outside the input field
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingBottom: 25,
    height: '72%',
  },
});
