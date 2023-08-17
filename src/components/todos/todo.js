import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {changeMode, deleteTodos, toggleChecked} from './todosSlice';

export const TodoItem = ({item}) => {
  const image = item.image;
  const dispatch = useDispatch();

  const handleDeleteTodo = id => {
    dispatch(deleteTodos(id));
  };

  const handleToogleCheck = id => {
    dispatch(toggleChecked(id));
  };

  const handleEditTodo = (mode, id) => {
    dispatch(changeMode({mode, id}));
  };
  return (
    <View style={styles.todoItem}>
      <CheckBox
        value={item.checked}
        onValueChange={() => handleToogleCheck(item.id)}
      />
      {image && (
        <Image source={{uri: image.path}} style={{width: 36, height: 36}} />
      )}
      <Text style={styles.todo}>{item.title}</Text>
      <TouchableOpacity
        style={styles.edit}
        onPress={() => handleEditTodo('EDIT', item.id)}>
        <Text style={styles.btnTxt}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleDeleteTodo(item.id)}>
        <Text style={styles.btnTxt}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#de4949',
    padding: 5,
    borderRadius: 8,
  },
  todoItem: {
    flexDirection: 'row',
    backgroundColor: '#9850ad',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  todo: {
    flex: 1,
    marginRight: 5,
    marginLeft: 10,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    padding: 6,
  },
  edit: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 8,
    marginRight: 5,
  },
});
