import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.title};
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 13px;

  color: ${({ theme }) => theme.colors.highlight};

  margin-right: 24px;
`;

export const Footer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  
  color: ${({ theme }) => theme.colors.title};

  margin-left: 7px;
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const Player = styled.Text<{ owner: boolean }>`
  font-family: ${({ theme }) => theme.fonts.text500};
  font-size: 13px;

  margin-left: 7px;
  margin-right: 24px;

  color: ${({ owner, theme }) => (owner ? theme.colors.red : theme.colors.on)}
`;
