/* eslint-disable react/require-default-props */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import DefaultTheme from '../../styles/themes/DefaultTheme';
import {
  Container, Gradient, CardContainer, Card, Title,
} from './style';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  hasCheckBox = true,
  checked = true,
  ...rest
}: Props): JSX.Element {
  const { gradients } = DefaultTheme.colors;

  return (
    <Container {...rest}>
      <Gradient colors={[
        gradients.gradient50, gradients.gradient70]}
      >
        <CardContainer
          colors={[
            checked ? gradients.gradient85 : gradients.gradient50, gradients.gradient40,
          ]}
          checked={checked}
        >
          { hasCheckBox && <Card checked={checked} /> }
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </CardContainer>
      </Gradient>
    </Container>
  );
}
