import React from 'react';

import { categories } from '../../utils/categories';
import { Category } from '../Category';
import {
  Container,
} from './style';

interface Props {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props): JSX.Element {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map((category) => (
          <Category
            key={category.id}
            icon={category.icon}
            title={category.title}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </Container>
  );
}
