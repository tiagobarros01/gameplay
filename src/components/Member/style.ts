import styled from 'styled-components/native';

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
  
`;

export const Info = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 13px;
  
  color: ${({ theme }) => theme.colors.highlight};
`;
