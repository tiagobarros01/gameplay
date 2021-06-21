import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import {
  Wrapper, IconContainer, Icon, Info,
} from './style';

interface Props extends TouchableOpacityProps {
  title: string;
  opacity: number;
}

export function ButtonIcon({ title, opacity, ...rest }: Props): JSX.Element {
  return (
    <Wrapper activeOpacity={opacity} {...rest}>
      <IconContainer>
        <Icon source={DiscordImg} />
      </IconContainer>
      <Info>{title}</Info>
    </Wrapper>
  );
}
