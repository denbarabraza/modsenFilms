import React, { memo } from 'react';

import { Container, Spinner, Wrapper } from '@/components/Loader/styled';

export const Loader = memo(() => {
  return (
    <Container>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Container>
  );
});
