import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Main = styled.View`

`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.title};

  margin-right: 6px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.title};
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};

  color: ${({ theme }) => theme.colors.highlight}
`;
