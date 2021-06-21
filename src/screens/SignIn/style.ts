import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Container = styled.View`
  margin-top: -40px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  text-align: center;

  font-size: 40px;

  margin-bottom: 16px;
`;

export const Details = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-size: 15px;

  text-align: center;

  margin-bottom: 64px;
`;
