import styled from 'styled-components/native';

export const Container = styled.View`
  width: 78%;
  height: 1px;

  background: ${({ theme }) => theme.colors.gradients.gradient50};

  margin: 2px 0 31px 0;

  align-self: flex-end;
`;
