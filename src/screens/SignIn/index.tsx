import React from 'react';
import { StatusBar } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import {
  Wrapper, Image, Container, Title, Details,
} from './style';

export default function SignIn(): JSX.Element {
  return (
    <Wrapper>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={IllustrationImg} resizeMode="stretch" />
      <Container>
        <Title>
          Organize
          {'\n'}
          your games
          {'\n'}
          easily
        </Title>
        <Details>
          Create groups to pay your favorites games
          {'\n'}
          with your friends
        </Details>
        <ButtonIcon title="Enter with Discord" opacity={0.6} />
      </Container>
    </Wrapper>
  );
}
