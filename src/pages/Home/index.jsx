import React from 'react';

import { Container } from './styles';

import Header from '@/components/Header';

import Body from '@/components/Body';
import Card from '@/components/Card';

export default function Home() {
  return (
    <Container>
      <Header />

      <Body>
        <Card title="About me 👦" />
        <Card title="My projects 💻" />
        <Card title="❌" fontSize="115px" opacity={0.6} centered />
      </Body>
    </Container>
  );
}
