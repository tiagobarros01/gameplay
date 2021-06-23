import React from 'react';

import DefaultTheme from '../../styles/themes/DefaultTheme';
import { Gradient, AvatarImg } from './style';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props): JSX.Element {
  const { gradients } = DefaultTheme.colors;

  return (
    <Gradient
      colors={[
        gradients.gradient50,
        gradients.gradient70,
      ]}
    >
      <AvatarImg source={{ uri: urlImage }} />
    </Gradient>
  );
}
