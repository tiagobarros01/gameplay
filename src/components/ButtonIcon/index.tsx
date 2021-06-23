import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import {
  Wrapper, IconContainer, Icon, Info,
} from './style';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props): JSX.Element {
  return (
    <Wrapper {...rest}>
      <IconContainer>
        <Icon source={DiscordImg} />
      </IconContainer>
      <Info>{title}</Info>
    </Wrapper>
  );
}
