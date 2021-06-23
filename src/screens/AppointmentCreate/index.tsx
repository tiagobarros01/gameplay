import React from 'react';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import {
} from './style';

export function AppointmentCreate(): JSX.Element {
  return (
    <Background>
      <Header
        title="Schedule match"
      />
    </Background>
  );
}
