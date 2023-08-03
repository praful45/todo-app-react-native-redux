import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 25,
    marginHorizontal: 10,
  },
});
