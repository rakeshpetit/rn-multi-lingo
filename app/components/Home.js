import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {useSelector} from 'react-redux';
const Home = ({navigation}) => {
  const languagesData = useSelector(state => state.language);
  const {defaultLanguage} = languagesData;
  const languages = languagesData.languages[defaultLanguage];
  console.log('languages', languages);
  console.log('defaultLanguage', defaultLanguage);
  return (
    <View style={styles.container}>
      <Text>{languages.hello}</Text>
      <Button
        onPress={() => {
          navigation.navigate('Details');
        }}
        title={languages.detailsButton}
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
