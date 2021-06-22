import React from 'react';

import DefaultTheme from '../../styles/themes/DefaultTheme';
import { Gradient } from './style';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props): JSX.Element {
  const { gradients } = DefaultTheme.colors;

  return (
    <Gradient
      colors={[
        gradients.gradient80,
        gradients.gradient100,
      ]}
    >
      {children}
    </Gradient>
  );
}
