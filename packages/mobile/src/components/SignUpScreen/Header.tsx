import * as React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

const Wrapper = styled.View``;
const Title = styled.Text`
  font-size: 26px;
`;

export interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
    </Wrapper>
  );
};

export default Header;