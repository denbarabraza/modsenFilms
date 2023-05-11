import React from 'react';
import { CBlockInfoItem } from 'src/components/Footer/Info';
import { CBlockSocial } from 'src/components/Footer/Social';

import {
  BlockAboutUs,
  BlockInfo,
  BlockRightsInfo,
  Container,
  InnerWrapper,
  Wrapper,
} from '@/components/Footer/styled';

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockAboutUs>
            <BlockInfo>
              <CBlockInfoItem rules={1} />
              <CBlockInfoItem rules={0} />
            </BlockInfo>
            <CBlockSocial />
          </BlockAboutUs>
          <BlockRightsInfo>
            © Copyright 2023 Modsen. All rights reserved | Privacy policy
          </BlockRightsInfo>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
