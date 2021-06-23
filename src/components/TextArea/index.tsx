import React from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './style';

export function TextArea({ ...rest }: TextInputProps): JSX.Element {
  return (
    <Input
      {...rest}
    />
  );
}
