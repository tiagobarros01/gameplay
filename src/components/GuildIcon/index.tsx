import React from 'react';

import { Image } from './style';

export function GuildIcon(): JSX.Element {
  const uri = 'https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png';

  return (
    <Image
      source={{ uri }}
      resizeMode="cover"
    />
  );
}
