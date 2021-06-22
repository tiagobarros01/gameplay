import React from 'react';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Container, Header } from './style';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
    </Container>
  );
}
