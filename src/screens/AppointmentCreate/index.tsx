import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import DefaultTheme from '../../styles/themes/DefaultTheme';
import {
  Label, Form, Select, Image, SelectBody, Field,
  Column,
  Divider,
  FieldContent,
} from './style';

export function AppointmentCreate(): JSX.Element {
  const [category, setCategory] = useState<string>('');

  return (
    <Background>
      <Header
        title="Schedule match"
      />
      <Label style={{
        marginLeft: 24,
        marginTop: 36,
        marginBottom: 18,
      }}
      >
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
        <Field>
          <FieldContent>
            <Label>
              Day and month
            </Label>
            <Column>
              <SmallInput maxLength={2} />
              <Divider>
                /
              </Divider>
              <SmallInput maxLength={2} />
            </Column>
          </FieldContent>
          <FieldContent>
            <Label>
              Hour and minute
            </Label>
            <Column>
              <SmallInput maxLength={2} />
              <Divider>
                :
              </Divider>
              <SmallInput maxLength={2} />
            </Column>
          </FieldContent>
        </Field>
      </Form>

    </Background>
  );
}
