import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title700};

  color: ${({ theme }) => theme.colors.title};
`;

export const Form = styled.View`
  padding: 0 24px 0 24px;

  margin-top: 32px;
`;

export const Select = styled.View`
  width: 100%;
  height: 68px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-color: ${({ theme }) => theme.colors.gradients.gradient60};
  border-width: 1px;
  border-radius: 8px;

  padding-right: 25px;

  overflow: hidden;

`;

export const Image = styled.View`
  width: 64px;
  height: 68px;

  background: ${({ theme }) => theme.colors.gradients.gradient60}; 

  border-width: 1px;
  border-radius: 8px;
`;

export const SelectBody = styled.View`
  flex: 1;

  align-items: center;
`;

export const Field = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  margin-top: 30px;
`;

export const FieldContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin-right: 4px;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.text500};

  color: ${({ theme }) => theme.colors.highlight}
`;
