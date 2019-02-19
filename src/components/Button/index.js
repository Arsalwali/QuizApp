import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme';

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, props.buttonStyle]} onPress={props.onButtonPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 3,
    backgroundColor: colors.primary1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
  },
});

export default Button;