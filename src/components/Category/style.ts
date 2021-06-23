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

export const CardContainer = styled(LinearGradient)<{ checked: boolean }>`
  width: 100px;
  height: 116px;

  border-radius: 8px;

  align-items: center;
  justify-content: space-between;

  padding: 20px 0 20px 0;

  opacity: ${({ checked }) => (checked ? 1 : 0.4)};
`;

export const Card = styled.View<{ checked: boolean }>`
  position: absolute;

  top: ${({ checked }) => (checked === true ? 7 : 7)}px;
  right: ${({ checked }) => (checked === true ? 7 : 7)}px;

  width: ${({ checked }) => (checked === true ? 10 : 12)}px;
  height: ${({ checked }) => (checked === true ? 10 : 12)}px;

  background: ${({ checked, theme }) => (checked === true ? theme.colors.red : theme.colors.gradients.gradient80)};

  border-color: ${({ checked, theme }) => (checked === true ? 'transparent' : theme.colors.gradients.gradient80)};
  border-width: ${({ checked }) => (checked === true ? 0 : 2)}px;
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 15px;

  color: ${({ theme }) => theme.colors.title}
`;
