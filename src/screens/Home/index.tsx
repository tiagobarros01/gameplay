import React from 'react';
import { View } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { Container, Header } from './style';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
      <View>
        <CategorySelect categorySelected="1" />
      </View>
    </Container>
  );
}
