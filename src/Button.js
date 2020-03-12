import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Button = memo(({title, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonComponent}>
      <Text style={styles.teksButton}> {title} </Text>
    </TouchableOpacity>
  );
});

export default Button;
