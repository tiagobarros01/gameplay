/* eslint-disable no-unused-expressions */
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Divider } from '../../components/Divider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { appointments } from '../../utils/appointments';
import {
  styles, Container, Header, Content,
} from './style';

export default function Home(): JSX.Element {
  const [category, setCategory] = useState<string>('');
  const { navigate } = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigate('AppointmentDetails');
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
              <Appointment
                data={item}
                onPress={handleAppointmentDetails}
              />
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
