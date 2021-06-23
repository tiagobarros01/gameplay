import styled from 'styled-components/native';

import DefaultTheme from '../../styles/themes/DefaultTheme';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 18px;
  
  color: ${({ theme }) => theme.colors.title};
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Bullet = styled.View<{ isOnline: boolean }>`
  width: 8px;
  height: 8px;

  border-radius: 4px;

  margin-right: 9px;

  background: ${({ isOnline }) => (isOnline ? DefaultTheme.colors.on : DefaultTheme.colors.red)};
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 13px;
  
  color: ${({ theme }) => theme.colors.highlight};
`;
