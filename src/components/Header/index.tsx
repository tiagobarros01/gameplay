/* eslint-disable react/require-default-props */
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import DefaultTheme from '../../styles/themes/DefaultTheme';
import { Container, Title } from './style';

type Props = {
  title: string;
  action?: React.ReactNode;
}

export function Header ({ action, title }: Props): JSX.Element {
  const { gradients, red } = DefaultTheme.colors;
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container
      colors={[gradients.gradient100, gradients.gradient50]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={red} />
      </BorderlessButton>
      <Title>
        {title}
      </Title>
      {action && (
        <View>
          {action}
        </View>
      )}
    </Container>
  );
}
