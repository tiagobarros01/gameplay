import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: 48px;
  width: 48px;

  background: ${({ theme }) => theme.colors.red};

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
  
`;
