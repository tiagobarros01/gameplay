import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import DefaultTheme from '../../styles/themes/DefaultTheme';
import {
  Container,
  Icon,
} from './styles';

export function ButtonAdd({ ...rest }: RectButtonProps): JSX.Element {
  return (
    <Container {...rest}>
      <Icon name="plus" color={DefaultTheme.colors.title} size={24} />
    </Container>
  );
}
