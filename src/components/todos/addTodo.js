import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodos} from './todosSlice';

export const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodos(title));
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={text => setTitle(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAddTodo}>
        <Text style={styles.btnTxt}>Add</Text>
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
    borderColor: '#52ba54',
    borderRadius: 8,
    color: 'black',
    flex: 1,
    height: 48,
    marginRight: 5,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: '#52ba54',
    borderRadius: 9,
    padding: 15,
  },
  btnTxt: {
    color: 'white',
  },
});
