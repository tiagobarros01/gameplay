import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { AppointmentProps } from '../../@types/AppointmentProps';
import CalendarSvg from '../../assets/calendar.svg';
import PlayerSvg from '../../assets/player.svg';
import DefaultTheme from '../../styles/themes/DefaultTheme';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';
import {
  Container, Content, Header, Title, Category, PlayersInfo, Player, Footer, DateInfo, Date,
} from './style';

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props): JSX.Element {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { on, red } = DefaultTheme.colors;

  return (
    <RectButton {...rest}>
      <Container>
        <GuildIcon />
        <Content>
          <Header>
            <Title>
              {data.guild.name}
            </Title>
            <Category>
              {category.title}
            </Category>
          </Header>
          <Footer>
            <DateInfo>
              <CalendarSvg />
              <Date>
                {data.date}
              </Date>
            </DateInfo>
            <PlayersInfo>
              <PlayerSvg fill={owner ? red : on} />
              <Player owner={owner}>{owner ? 'Host' : 'Visitor'}</Player>
            </PlayersInfo>
          </Footer>
        </Content>
      </Container>
    </RectButton>
  );
}
