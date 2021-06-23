/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { View } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Container, Header, Content } from './style';

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

        <Content>
          <ListHeader title="Scheduled matches" subTitle="Total 6" />
        </Content>
      </View>
    </Container>
  );
}
