import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Details from './components/Details';
import Maps from './components/Maps';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details,
    Maps: Maps,
  },
  {
    initialRouteName: 'Maps',
  },
);

export default createAppContainer(AppNavigator);
