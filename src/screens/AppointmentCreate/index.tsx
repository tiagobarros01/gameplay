import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import DefaultTheme from '../../styles/themes/DefaultTheme';
import {
  Label, Form, Select, Image, SelectBody,
} from './style';

export function AppointmentCreate(): JSX.Element {
  const [category, setCategory] = useState<string>('');

  return (
    <Background>
      <Header
        title="Schedule match"
      />
      <Label style={{ marginLeft: 24, marginTop: 36 }}>
        Category
      </Label>
      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />
      <Form>
        <RectButton>
          <Select>
            {
            // <Image />
              <GuildIcon />
            }
            <SelectBody>
              <Label>
                Select a server
              </Label>
            </SelectBody>
            <Feather
              name="chevron-right"
              color={DefaultTheme.colors.title}
              size={18}
            />
          </Select>
        </RectButton>
      </Form>

    </Background>
  );
}
