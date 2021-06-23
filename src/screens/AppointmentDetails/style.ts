import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
});

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;

  margin-bottom: 30px;
`;

export const BannerContent = styled.View`
  flex: 1;

  justify-content: flex-end;

  padding: 0 24px 0 24px;

  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.title700};

  color: ${({ theme }) => theme.colors.title};
`;

export const Details = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.text400};

  color: ${({ theme }) => theme.colors.title};
`;

export const Footer = styled.View`
  padding: 
    20px
    24px
    20px
    24px; 
  
  margin-bottom: ${getBottomSpace()}px;
`;
