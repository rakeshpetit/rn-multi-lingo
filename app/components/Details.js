import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {currentLanguage} from '../selectors';

const Details = () => {
  const languages = useSelector(currentLanguage);
  return (
    <View style={styles.container}>
      <Text>{languages.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Details;
