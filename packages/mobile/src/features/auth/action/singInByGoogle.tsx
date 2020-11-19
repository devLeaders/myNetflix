import * as AuthConnectors from "@project/common/features/firebase-auth/connectors";
import AxioiInstance from '@project/common/features/config/axios/configAxios';
import AsyncStorage from '@react-native-community/async-storage';
import { ErrorSingin } from '../components/SignIn/ErrorEnum';
import { GoogleSignin } from '@react-native-community/google-signin';


export const singInByGoogle = async (
    callback:(error?:string)=>void,
) => {
  try {
        await GoogleSignin.hasPlayServices();
        const {idToken} = await GoogleSignin.signIn();
        const test = await GoogleSignin.getTokens()
        const dataResponse = await AuthConnectors.signInGoogle({
            idToken:idToken,
        }as  string | any);

        console.log(idToken)
        console.log('dupa')
        console.log(test)
        // const token = dataResponse.data.token;
        // AsyncStorage.setItem('token', token);
        // AxioiInstance.defaults.headers.Authorization = `Bearer ${token}`;
        // console.log('dupa',token)
         // Create a Google credential with the token
      
      callback()
    } catch (error) {
        console.log('dupa2')
        console.log(error)
        callback(getErrorMsg(error?.dataResponse));
    }
}

const getErrorMsg = (error)=>{
  switch(error.status){
    case 401:
      return ErrorSingin.LOGINERROR
    case 500:
      return ErrorSingin.NOCONNECT
    default:
      return ErrorSingin.APPERROR
  }
}