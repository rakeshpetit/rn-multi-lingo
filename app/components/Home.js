import React, {useContext} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {currentLanguage, currentTheme} from '../selectors';
import {ThemeContext} from '../../index';

const Home = ({navigation}) => {
  const languages = useSelector(currentLanguage);
  const theme = useSelector(currentTheme);
  const themes = useContext(ThemeContext);
  console.log('Home theme', themes);
  const dispatch = useDispatch();
  return (
    <View style={[styles.container, {backgroundColor: themes.background}]}>
      <Text style={{color: themes.textColor}}>{languages.hello}</Text>
      <Button
        onPress={() => {
          navigation.navigate('Details');
        }}
        title={languages.detailsButton}
      />
      <Button
        onPress={() => dispatch({type: 'CHANGE_LANGUAGE'})}
        title={languages.lanName}
      />
      <Button
        onPress={() => dispatch({type: 'CHANGE_THEME'})}
        title={
          theme === 'light'
            ? `Switch to ${languages.dark}`
            : `Switch to ${languages.light}`
        }
      />
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
export default Home;
