import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodos, changeMode, editTodos} from './todosSlice';

export const AddTodo = ({route}) => {
  const todos = useSelector(state => state.todos);
  const mode = todos.mode;
  const editId = todos.editId;
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editId) {
      const todoEdit = todos.todos.find(todo => todo.id === editId);
      if (todoEdit) {
        setTitle(todoEdit.title);
      }
    }
  }, [editId, todos.todos]);
  const dispatch = useDispatch();

  const handleAddEditTodo = () => {
    if (mode === 'ADD') {
      dispatch(addTodos(title));
      setTitle('');
    }
    if (mode === 'EDIT') {
      dispatch(editTodos({editId, title}));
      setTitle('');
      dispatch(changeMode({mode: 'ADD', id: null})); //after editing the mode is again changed to add
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        style={[
          styles.input,
          mode === 'ADD' ? styles.inputaddColor : styles.inputEditColor,
        ]}
        onChangeText={text => setTitle(text)}
      />
      <TouchableOpacity
        style={[
          styles.btn,
          mode === 'ADD' ? styles.addBtnColor : styles.editBtnColor,
        ]}
        onPress={handleAddEditTodo}>
        <Text style={styles.btnTxt}>{mode === 'ADD' ? 'Add' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9ff',
    padding: 10,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
    flex: 1,
    height: 48,
    marginRight: 5,
    paddingHorizontal: 10,
  },
  inputaddColor: {
    borderColor: '#52ba54',
  },
  inputEditColor: {
    borderColor: '#2db4f7',
  },
  btn: {
    borderRadius: 9,
    padding: 15,
  },
  addBtnColor: {
    backgroundColor: '#52ba54',
  },
  editBtnColor: {
    backgroundColor: '#2db4f7',
  },
  btnTxt: {
    color: 'white',
  },
});
