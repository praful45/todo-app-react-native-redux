import React, {useEffect, useState} from 'react';
import {
  Image,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodos, changeMode, editTodos} from './todosSlice';
import ImagePicker from 'react-native-image-crop-picker';

export const AddTodo = ({route}) => {
  const todos = useSelector(state => state.todos);
  const mode = todos.mode;
  const editId = todos.editId;
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    if (editId) {
      const todoEdit = todos.todos.find(todo => todo.id === editId);
      if (todoEdit) {
        setTitle(todoEdit.title);
        setImage(todoEdit.image);
      }
    }
  }, [editId, todos.todos]);
  const dispatch = useDispatch();

  const handleAddEditTodo = () => {
    if (title.length > 10) {
      Alert.alert('Max Length', 'Maximum length of todo is 100');
      return;
    }
    if (mode === 'ADD') {
      dispatch(addTodos({title, image}));
      setTitle('');
      setImage(null);
    }
    if (mode === 'EDIT') {
      dispatch(editTodos({editId, title, image}));
      setTitle('');
      setImage(null);
      dispatch(changeMode({mode: 'ADD', id: null})); //after editing the mode is again changed to add
    }
  };

  const hangleAddEditImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      setImage(img);
    });
  };

  const hangleCancelImage = () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          value={title}
          style={[
            styles.input,
            !title.trim()
              ? styles.inputDisableColor
              : mode === 'ADD'
              ? styles.inputaddColor
              : styles.inputEditColor,
          ]}
          onChangeText={text => setTitle(text)}
        />
        <TouchableOpacity
          style={[
            styles.btn,
            !title.trim()
              ? styles.disabledBtn
              : mode === 'ADD'
              ? styles.addBtnColor
              : styles.editBtnColor,
          ]}
          onPress={handleAddEditTodo}
          disabled={!title.trim()}>
          <Text style={styles.btnTxt}>{mode === 'ADD' ? 'Add' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputRow}>
        {image && (
          <Image source={{uri: image.path}} style={{width: 50, height: 50}} />
        )}
        <TouchableOpacity
          style={[
            styles.btn,
            !title.trim()
              ? styles.disabledBtn
              : mode === 'ADD'
              ? styles.addBtnColor
              : styles.editBtnColor,
          ]}
          onPress={hangleAddEditImage}
          disabled={!title.trim()}>
          <Text style={styles.btnTxt}>
            {mode === 'ADD' ? 'Add Image' : 'Edit Image'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            !title.trim() || !image
              ? styles.disabledBtn
              : styles.cancelBtnColor,
          ]}
          onPress={hangleCancelImage}
          disabled={!title.trim() || !image}>
          <Text style={styles.btnTxt}>Remove Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9ff',
    padding: 10,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
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
  inputDisableColor: {
    borderColor: '#969696',
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
  disabledBtn: {
    backgroundColor: '#969696',
  },
  btnTxt: {
    color: 'white',
  },
  cancelBtnColor: {
    backgroundColor: '#de4949',
  },
});
