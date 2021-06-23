import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 48px;
  height: 48px;

  background: ${({ theme }) => theme.colors.gradients.gradient50};
  color: ${({ theme }) => theme.colors.title};

  border-radius: 8px;
  
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 13px;

  margin-right: 4px;

  text-align: center;
`;
