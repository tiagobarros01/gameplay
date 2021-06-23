import React from 'react';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Container } from './style';

type Props = {

}

export function AppointmentDetails (): JSX.Element {
  return (
    <Background>
      <Header
        title="Details"
      />
    </Background>
  );
}
