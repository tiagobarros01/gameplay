import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)``;

export const Gradient = styled(LinearGradient)`
  width: 104px;
  height: 120px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  margin-right: 8px;
`;

export const CardContainer = styled.View`
  width: 100px;
  height: 116px;

  background: ${({ theme }) => theme.colors.gradients.gradient40};

  border-radius: 8px;

  justify-content: space-between;
  align-items: center;

  padding: 7px 0 7px 0;
`;

export const Card = styled.View<{ checked: boolean }>`
  width: ${({ checked }) => (checked === true ? 10 : 12)}px;
  height: ${({ checked }) => (checked === true ? 10 : 12)}px;

  background: ${({ checked, theme }) => (checked === true ? theme.colors.red : theme.colors.gradients.gradient50)};

  align-self: flex-end;
  margin-right: 7px;

  border-color: ${({ checked, theme }) => (checked === true ? 'transparent' : theme.colors.gradients.gradient50)};
  border-width: ${({ checked }) => (checked === true ? 0 : 2)}px;
  border-radius: ${({ checked }) => (checked === true ? 0 : 3)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: 15px;

  color: ${({ theme }) => theme.colors.title}
`;
