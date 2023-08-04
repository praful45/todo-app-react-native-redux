//intially separate screen was made for editing
//but later it was done in the same screen
//but right now not removing it though it is not used in the ap
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {editTodos} from './todosSlice';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

export const EditTodo = ({route}) => {
  const navigation = useNavigation();
  const {id, title: editTitle} = route;
  const [title, setTitle] = useState(editTitle);
  const dispatch = useDispatch();
  const [imageData, setImageData] = useState(null);

  const handleEditTodo = () => {
    dispatch(editTodos({id, title}));
    navigation.navigate('Home');
    setTitle('');
  };

  const handleSelectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageData(image);
    });
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={text => setTitle(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={handleEditTodo}>
          <Text style={styles.btnTxt}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleSelectImage}>
          <Text style={styles.btnTxt}>Select Image</Text>
        </TouchableOpacity>
        {imageData && (
          <Image
            source={{uri: imageData.path}}
            style={{width: 200, height: 200}}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#e9e9ff',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 36,
  },
  input: {
    borderWidth: 1,
    borderColor: '#52ba54',
    borderRadius: 8,
    color: 'black',
    height: 48,
    marginRight: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#52ba54',
    borderRadius: 9,
    padding: 15,
    marginBottom: 16,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
