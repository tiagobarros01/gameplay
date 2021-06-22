/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { View } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { Container, Header } from './style';

export default function Home(): JSX.Element {
  const [category, setCategory] = useState<string>('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
      <View>
        <CategorySelect setCategory={handleCategorySelect} categorySelected={category} />
      </View>
    </Container>
  );
}
