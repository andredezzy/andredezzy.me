import React, { useState, useEffect } from 'react';

import api from '@/services/api';

import { getComponentForLanguage } from '@/components/Language';
import Star from '@/components/Star';

import { Container, Card, Gradient } from './styles';

export default function MyProjects() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get('/users/andredezzy/repos');

      setRepositories(response.data);
    }

    loadRepositories();
  }, []);

  return (
    <>
      <Container>
        {repositories.length > 0 ? (
          repositories.map(repository => (
            <Card>
              <Card.Title>{repository.name}</Card.Title>
              <Card.Description>{repository.description}</Card.Description>

              <Card.Information>
                {getComponentForLanguage(repository.language)}
                <Star amount={repository.stargazers_count} style={{ marginLeft: '15px' }} />
              </Card.Information>
            </Card>
          ))
        ) : (
          <h3>No repositories</h3>
        )}
      </Container>

      <Gradient to="bottom" />
    </>
  );
}
