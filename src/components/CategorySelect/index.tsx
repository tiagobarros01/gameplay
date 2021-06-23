/* eslint-disable react/require-default-props */
import React from 'react';

import { categories } from '../../utils/categories';
import { Category } from '../Category';
import { Container } from './style';

type Props = {
  hasCheckBox?: boolean;
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props): JSX.Element {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </Container>
  );
}
