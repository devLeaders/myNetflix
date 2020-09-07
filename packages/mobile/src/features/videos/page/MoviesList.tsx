import React, {useContext,useEffect} from 'react';
import { View, ScrollView, Image, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SlaiderLarge } from '../components/Movies/SlaiderLarge';
import {  
  SubTitleLeft,
  SubTitleRight,
  GroupForSubtitle,
  SmallArrow,
  ButtonContainer
} from '../components/Movies/MovieListStyle';
import { SlaiderNormal } from '../components/Movies/SlaiderNormal';
import MainScreenHeader from '../components/MainScreen/MainScreenHeader';
import { useCaseNotification } from '../components/Movies/CaseNotificationForMovies';
import { NavigationName } from '../../../config/routing/NavigationName';
import { NavProps } from '../../../config/routing/ParamList';
import { NavigationHelpers } from '@react-navigation/native';

interface MovieListP {
  navigation: NavigationHelpers<any>
}

export const MoviesList = (props:MovieListP) =>{

  useCaseNotification(props.navigation)

  return (
      <SafeAreaView>
        <ScrollView>
            <MainScreenHeader navigation={props.navigation}/>
          <View>
            <SlaiderLarge />
          </View>
          <View>
              <GroupForSubtitle>
                <TouchableOpacity>
                  <SubTitleLeft>DevOps</SubTitleLeft>
                </TouchableOpacity>
                <ButtonContainer>
                  <SubTitleRight>Zobacz wszystkie</SubTitleRight>
                  <SmallArrow source={{uri:'ic_arrowright'}}/>
                </ButtonContainer>
              </GroupForSubtitle>
              <View>
                <SlaiderNormal/>
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default MoviesList;