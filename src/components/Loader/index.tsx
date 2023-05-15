import React from 'react';

import { Container, Spinner, Wrapper } from '@/components/Loader/styled';

export const Loader = () => {
  return (
    <Container>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Container>
  );
};
