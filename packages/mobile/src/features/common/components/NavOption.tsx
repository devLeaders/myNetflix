import * as React from 'react'
import { HeaderTitle } from '../../videos/components/Movies/HeaderTitle';
import { HeaderLeft } from '../../videos/components/Movies/HeaderLeft';
import { HeaderRight } from '../../videos/components/Movies/HeaderRight';
import HeaderLeftSingle from '../../../features/videos/components/SingleScreen/HeaderLeftSingle';
import { View } from 'react-native';
import { NavigationName } from '../../../config/routing/NavigationName';

export class NavOption extends React.Component {
    static optionsMovieList = () => {
        return {
            title: 'Play Lista',
            headerStyle: {
             backgroundColor: '#f0f2fa',
            },
            headerTitle: () => <HeaderTitle/>,
            headerLeft: () => <HeaderLeft/>,
            headerRight: () => <HeaderRight/>,
        };
      };
      static optionsMainScreen = () => {
        return {
            headerStyle: {
              backgroundColor: '#00000000',
              paddingTop: 50,
            },
            headerTransparent: true,
            headerTitle: () => <View />,
      
          };
    };
    static optionsSingleMovie = (navigation) => {
        return {
            headerStyle: {
                backgroundColor: '#00000000',
            },
            headerTransparent: true,
            headerTitle: () => <View />,
            headerLeft: () => <HeaderLeftSingle/>,
        };
      };
    static optionsTabNavigator = () => {
        return {
          headerShown: false
        };
    };
    static optionsMenu = () => {
        return {
            title: 'Menu',
            headerStyle: {
                backgroundColor: '#f0f2fa',
               },
            headerTitle: () => <HeaderTitle/>,
            headerLeft: () => <HeaderLeft/>,
            headerRight: () => <HeaderRight/>,
      };
    }
    static optionsTeams = () => {
        return {
            title: 'Zespoły',
      };
    }
    static optionsTasks = () => {
        return {
            title: 'Zadania',
      };
    }
    static optionsAlert = (props:any) => {
        console.log(props)
        return {
            title: 'Alerty',
      };
    }
    static optionsSearch = () => {
        return {
            headerShown: true,
            title: 'Szukaj',
      };
    }
    static optionsSingIn = () => {
        return{
        headerShown : false
        }
    }
    static optionsSingUp = () => {
        return{
        headerShown : false
        }
    }
    static optionsQrcode= () => {
        return {
            title: 'Qr Scaner',
            headerStyle: {
                backgroundColor: '#f0f2fa',
               },
      };
    }
    static optionsDrawer = () => {
        return{
            headerTransparent: true,
            headerTitle: () => <View />,
            headerLeft: () => <View />,
            headerStyle: {
                backgroundColor: '#00000000',
            }
        }
    }
    static optionsFilterWithList = () => {
        return{
        headerShown : false
        }
    }   

}