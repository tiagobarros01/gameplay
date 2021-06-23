import { useNavigation } from '@react-navigation/core';
import React from 'react';

import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import {
  Wrapper, Image, Container, Title, Details,
} from './style';

export default function SignIn(): JSX.Element {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <Wrapper>
        <Image source={IllustrationImg} resizeMode="stretch" />
        <Container>
          <Title>
            Connect
            {'\n'}
            and organize your
            {'\n'}
            games
          </Title>
          <Details>
            Create groups to pay your favorites games
            {'\n'}
            with your friends
          </Details>
          <ButtonIcon onPress={handleSignIn} title="Enter with Discord" />
        </Container>
      </Wrapper>
    </Background>
  );
}
