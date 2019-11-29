import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {currentLanguage} from '../selectors';
import {ThemeContext} from '../../index';

const Details = () => {
  const languages = useSelector(currentLanguage);
  const themes = useContext(ThemeContext);
  console.log('Details theme', themes);
  return (
    <View style={[styles.container, {backgroundColor: themes.background}]}>
      <Text style={{color: themes.textColor}}>{languages.details}</Text>
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
