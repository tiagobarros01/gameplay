/* eslint-disable camelcase */
import React from 'react';
import { View } from 'react-native';

import { MembersData } from '../../@types/MembersData';
import { Avatar } from '../Avatar';
import {
  Container, Title, Status, Info, Bullet,
} from './style';

type Props = {
  data: MembersData;
}

export function Member({ data: { avatar_url, status, username } }: Props): JSX.Element {
  const isOnline = status === 'online';

  return (
    <Container>
      <Avatar
        urlImage={avatar_url}
      />
      <View>
        <Title>
          {username}
        </Title>
        <Status>
          <Bullet isOnline={isOnline} />
          <Info>
            { isOnline ? 'Available' : 'Busy' }
          </Info>
        </Status>
      </View>
    </Container>
  );
}
