import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;

  padding-right: 24px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;

`;

export const Content = styled.View`
  margin-top: 42px;
`;
