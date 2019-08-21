import React from 'react';

import Language from '@/components/Language';

import { Container, Card } from './styles';

export default function MyProjects() {
  return (
    <Container>
      <Card>
        <Card.Title>andredezzy.me</Card.Title>
        <Card.Description>
          <span role="img" aria-label="emoji">
            🔥
          </span>
          My website (portfolio), and my personal card
        </Card.Description>

        <Card.Information>
          <Language label="JavaScript" color="#F1E05A" />
        </Card.Information>
      </Card>
    </Container>
  );
}
