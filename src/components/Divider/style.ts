import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  height: 1px;

  background: ${({ theme }) => theme.colors.gradients.gradient50};

  margin: 21px 0 21px 0;

  align-self: flex-end;
`;
