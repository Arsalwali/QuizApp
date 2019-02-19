import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    elevation: 5,
  },
  text: {
    fontSize: metrics.header,
  }
});

export default Header;
