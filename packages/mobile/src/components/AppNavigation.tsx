/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { Component } from 'react';
//navigation import
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Here we can import new screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ExampleContextAPI from '../screens/ExampleContextAPI';
import ExampleContextAPI2 from '../screens/ExampleContextAPI2';
import AxiosExample from '../screens/AxiosExample';
import SingleMovie from '../screens/SingleMovie';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen'
import SingleMovie2 from '../screens/SingleMovie2';

//Can we move the navigation to separate component...??
const navigation = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    ExampleContextAPI: ExampleContextAPI,
    ExampleContextAPI2: ExampleContextAPI2,
    AxiosExample: AxiosExample,
    SingleMovie2: SingleMovie2,
    //here we can add new screen name
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(navigation);

export default class AppNavigation extends Component {
  render() {
    return (
    <AppContainer />
    )
  }
}