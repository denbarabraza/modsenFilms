import React from 'react';

import { Container, Spinner, Wrapper } from '@/components/Loader/styled';

type LoaderProps = {
  size?: number;
  color?: string;
};

export const Loader: React.FC<LoaderProps> = ({ size = 40, color = '#ccc' }) => {
  return (
    <Container>
      <Wrapper>
        <Spinner color={color} size={20} />
      </Wrapper>
    </Container>
  );
};
