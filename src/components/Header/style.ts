import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 104px;

  padding: ${getStatusBarHeight()} 24px 0 24px;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;

  text-align: center;

  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.title}
`;
