import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Text>HOME</Text>
    </Container>
  );
}

Home.navigationOptions = {
  title: 'SHOESE',
};
