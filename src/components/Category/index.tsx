/* eslint-disable react/require-default-props */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import DefaultTheme from '../../styles/themes/DefaultTheme';
import {
  Container, Gradient, CardContainer, Card, Title,
} from './style';

interface Props extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = true,
  ...rest
}: Props): JSX.Element {
  const { gradients } = DefaultTheme.colors;

  return (
    <Container {...rest}>
      <Gradient colors={[
        gradients.gradient50, gradients.gradient70]}
      >
        <CardContainer style={{ opacity: checked ? 1 : 0.4 }}>
          <Card checked={checked} />
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </CardContainer>
      </Gradient>
    </Container>
  );
}
