import React from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './style';

export function SmallInput({ ...rest }: TextInputProps): JSX.Element {
  return <Input {...rest} />;
}
