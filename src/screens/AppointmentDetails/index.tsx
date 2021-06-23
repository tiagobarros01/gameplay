import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { MembersData } from '../../@types/MembersData';
import BannerImg from '../../assets/banner.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Divider } from '../../components/Divider';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import DefaultTheme from '../../styles/themes/DefaultTheme';
import {
  BannerContent, Banner, Title, Details, styles, Footer,
} from './style';

export function AppointmentDetails (): JSX.Element {
  const members: MembersData[] = [
    {
      id: '1',
      username: 'Tiago',
      avatar_url: 'https://github.com/tiagobarros01.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Matheus',
      avatar_url: 'https://github.com/tiagobarros01.png',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title="Details"
        action={(
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={DefaultTheme.colors.red}
            />
          </BorderlessButton>
        )}
      />
      <Banner source={BannerImg}>
        <BannerContent>
          <Title>
            Legends
          </Title>
          <Details>
            is it today that we&apos;ll reach the challenger without losing any md10 match
          </Details>
        </BannerContent>
      </Banner>
      <ListHeader
        title="Players"
        subTitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        style={styles.members}
      />
      <Footer>
        <ButtonIcon title="join the match" />
      </Footer>
    </Background>
  );
}
