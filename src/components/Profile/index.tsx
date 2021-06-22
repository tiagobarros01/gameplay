import React from 'react';

import { Avatar } from '../Avatar';
import {
  Container,
  Main,
  User,
  Greeting,
  UserName,
  Message,
} from './style';

export function Profile(): JSX.Element {
  return (
    <Container>
      <Avatar urlImage="https://github.com/tiagobarros01.png" />
      <Main>
        <User>
          <Greeting>
            Hi,
          </Greeting>
          <UserName>
            Tiago
          </UserName>
        </User>
        <Message>
          Today is victory day
        </Message>
      </Main>
    </Container>
  );
}
