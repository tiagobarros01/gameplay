import React from 'react';

import { Profile } from '../../components/Profile';
import { Container, Header } from './style';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Profile />
      </Header>
    </Container>
  );
}
