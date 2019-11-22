import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {currentLanguage} from '../selectors';

const Home = ({navigation}) => {
  const languages = useSelector(currentLanguage);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>{languages.hello}</Text>
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
