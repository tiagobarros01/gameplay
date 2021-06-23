import React from 'react';

import { Container, Title, SubTitle } from './style';

type Props = {
  title: string;
  subTitle: string;
}

export function ListHeader({ title, subTitle }: Props): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
