/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Divider } from '../../components/Divider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import {
  styles, Container, Header, Content,
} from './style';

export default function Home(): JSX.Element {
  const [category, setCategory] = useState<string>('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Legends',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 at 20:40h',
      description: 'is it today that we\'ll reach the challenger without losing any md10 match',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Legends',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 at 20:40h',
      description: 'is it today that we\'ll reach the challenger without losing any md10 match',
    },
  ];

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

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
            ItemSeparatorComponent={() => <Divider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      </View>
    </Container>
  );
}
