import React from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';
 // import auth from '@react-native-firebase/auth';
 import * as AuthConnectors from "@project/common/features/firebase-auth/connectors";

import {useState, useEffect} from 'react';
import { View } from 'react-native';
import { NavigationName } from '../../../../../../src/config/routing/NavigationName';
import instance from '@project/common/features/config/axios/configAxios';
import { AsyncStorage } from 'react-native';


 const GoogleAuth = () => {

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    GoogleSignin.configure({
        scopes: ['profile'], // what API you want to access on behalf of the user, default is email and profile
        //scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '29847575452-acafiql6q80g3v0a7b3iiiofif1hrs2b.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        //hostedDomain: '', // specifies a hosted domain restriction
        //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        //accountName: '', // [Android] specifies an account name on the device that should be used
        //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      });
    }, []);


    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const {idToken} = await GoogleSignin.signIn();
            //const userInfo = await GoogleSignin.signIn();
           ///this.setState({ userInfo });
           setloggedIn(true);
           console.log({ userInfo })
           const dataResponse = await AuthConnectors.signInGoogle({
            idToken,
          });
          const token = dataResponse.data.token;
          AsyncStorage.setItem('token', token);
          instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          if (token) {
             console.log('jest token')
            }else {
             console.log('brak tokenu');
            }
          //()=>{props.navigation.navigate(NavigationName.MENU)} 

        } catch (error) {
          console.log({error})
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log('statusCodes.SIGN_IN_CANCELLED')
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log('statusCodes.IN_PROGRESS')
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('statusCodes.PLAY_SERVICES_NOT_AVAILABLE')
            // play services not available or outdated
          } else {
            // some other error happened
            console.log('some other error happened')
          }
        }
      };

    const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setuserInfo([]);
        } catch (error) {
          console.error(error);
        }
      };

      return (
        <>
          <View>
            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}/>
          </View>
        </>
      );

    };

export default GoogleAuth; 