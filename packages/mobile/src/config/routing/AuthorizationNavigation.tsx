import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationName } from './NavigationName';
import SignInScreen from '../../features/auth/page/SignInScrren';
import SignUpScreen from '../../features/auth/page/SingUpScrenn';
import { NavOption } from '../../features/common/components/NavOption';
import TabNavigation from './BottomNavigation/TabNavigation';
import SingleMovie from '../../features/videos/page/SingleMovie';
import { VideoPlayerScreen } from '../../features/videoPlayer/page/VideoPlayerScreen';
import FilterWithList from '../../features/videos/page/FilterWithList';
import Loading from '../../features/common/components/Loading';
import { View } from 'react-native';

const AuthStack = createStackNavigator();

const AuthorizationNavigation = () => {
    return(  
        <AuthStack.Navigator>
            <AuthStack.Screen name={NavigationName.LOADING} options={NavOption.optionsNoHeder} component={Loading}/>
            <AuthStack.Screen name={NavigationName.SIGNINSCREEN} options={NavOption.optionsNoHeder} component={SignInScreen}/>
            <AuthStack.Screen name={NavigationName.SINGUP} options={NavOption.optionsNoHeder} component={SignUpScreen}/>
            <AuthStack.Screen name={NavigationName.MENU} options={NavOption.optionsDrawer} component={TabNavigation}/>
            <AuthStack.Screen name={NavigationName.VIDEOPLAYER} options={NavOption.optionsNoHeder} component={VideoPlayerScreen}/>
            <AuthStack.Screen name={NavigationName.FILTERWITHLIST} options={NavOption.optionsNoHeder} component={FilterWithList}/>
        </AuthStack.Navigator>
)}

export default AuthorizationNavigation;

