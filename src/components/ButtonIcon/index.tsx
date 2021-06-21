import React from 'react';

import DiscordImg from '../../assets/discord.png';
import {
  Wrapper, IconContainer, Icon, Info,
} from './style';

export function ButtonIcon(): JSX.Element {
  return (
    <Wrapper>
      <IconContainer>
        <Icon source={DiscordImg} />
      </IconContainer>
      <Info>Enter with Discord</Info>
    </Wrapper>
  );
}
