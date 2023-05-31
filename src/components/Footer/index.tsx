import React from 'react';
import { BlockInfo } from 'src/components/Footer/BlockInfo';
import { BlockSocial } from 'src/components/Footer/BlockSocial';

import {
  BlockAboutUs,
  BlockAboutUsInfo,
  BlockRightsInfo,
  Container,
  InnerWrapper,
  Wrapper,
} from './styled';

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockAboutUs>
            <BlockAboutUsInfo>
              <BlockInfo rules={1} />
              <BlockInfo rules={0} />
            </BlockAboutUsInfo>
            <BlockSocial />
          </BlockAboutUs>
          <BlockRightsInfo>
            © Copyright 2023 Modsen. All rights reserved | Privacy policy
          </BlockRightsInfo>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
