import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerItem, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Hamburger } from './MovieListStyle'

export const HeaderLeft =(props)=>{
    const nav = useNavigation()

    return(
            <TouchableOpacity onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
                <Hamburger source={{uri:'ic_menu'}}/>
          </TouchableOpacity> 
    );
}
