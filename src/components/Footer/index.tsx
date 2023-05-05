import React from 'react';
import styled from 'styled-components';

import { socialData } from '@/constans/socialData';

const Container = styled.div`
  width: 100%;
  min-height: 12vh;
  background-color: #0ee0e7;
`;
const Wrapper = styled.div`
  width: 90vw;
  height: 100%;
  margin: 0 auto;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  height: 100%;
  border: 1px solid black;
`;
const BlockInformation = styled.div`
  border: 1px solid black;
  width: 100%;
`;
const BlockSocial = styled.div`
  border: 1px solid black;
`;
const ImageFooter = styled.img`
  width: 20px;
  height: 20px;
`;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockInformation>BlockInformation</BlockInformation>
          <BlockSocial>
            {/* {socialData.map(s => { */}
            {/*   return ( */}
            {/*     <a key={s.id} href={s.href} target='_blank' rel='noreferrer'> */}
            {/*       <ImageFooter src={s.img} /> */}
            {/*     </a> */}
            {/*   ); */}
            {/* })} */}
            BlockSocial
          </BlockSocial>
          <div>© Copyright 2023 Modsen. All rights reserved | Privacy policy</div>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
