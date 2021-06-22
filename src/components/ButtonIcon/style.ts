import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled(RectButton)`
  height: 56px;

  background: ${({ theme }) => theme.colors.red};

  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.line};
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Info = styled.Text`
  flex: 1;

  color: ${({ theme }) => theme.colors.title};

  font-size: 15px;
  text-align: center;
`;
