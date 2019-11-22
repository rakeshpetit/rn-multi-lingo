import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Details = () => {
  const languagesData = useSelector(state => state.language);
  const {defaultLanguage} = languagesData;
  const languages = languagesData.languages[defaultLanguage];
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
