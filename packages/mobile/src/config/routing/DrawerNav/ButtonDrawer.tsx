import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../../features/common/styles/constans/FontWeight';
import { FontSize } from '../../../features/common/styles/constans/FontSize';
import { Color } from '../../../features/common/styles/constans/Color';
import { NavigationName } from '../NavigationName';
import {TouchableOpacity} from 'react-native';
import { MyText } from '../../../features/common/styles/MyText';

const Wrapper = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    margin-top: 15px;
`;

const ButtonFilter = styled.TouchableOpacity({
    marginRight: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Color.LIGHTGREYX,
    backgroundColor: Color.WHITE,
    shadowColor: Color.LIGHTGREYX,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: "1",
    shadowRadius: 8,
    elevation: "3",
  });

  const TextButton = styled(MyText)({
    marginRight: 10,
    marginLeft: 10,
    fontSize: FontSize.MIDPLUS,
    fontWeight: parseInt(FontWeight.REGULAR, 10),
    color: Color.BLACK,
  });
  

interface ButtonDrawerP {
    navigation: any,
    text: string,
    goto: any
  }


export default class ButtonDrawer extends React.Component<ButtonDrawerP> {
    render(){
        return(
            <Wrapper>
                <ButtonFilter
                    onPress={() => this.props.navigation.navigate(this.props.goto)}>
                <TextButton>{this.props.text}</TextButton>
                </ButtonFilter>
            </Wrapper>

        );
    }
}