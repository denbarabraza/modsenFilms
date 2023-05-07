import React from 'react';
import styled from 'styled-components';

import { aboutUsData } from '@/constans/aboutUsData';
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
  margin-bottom: 10px;
`;
const BlockSocial = styled.div`
  border: 1px solid black;
  display: flex;
  gap: 30px;
`;
const ImageFooter = styled.img`
  width: 20px;
  height: 20px;
`;
const BlockAboutUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0 35px 0;
`;
const BlockInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  border: 1px solid black;
  margin-left: 45px;
`;
const BlockInformationItem = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.83);
  cursor: pointer;
`;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockAboutUs>
            <BlockInformation>
              <div>
                {aboutUsData
                  .filter(item => item.id % 2 === 1)
                  .map(item => {
                    return (
                      <BlockInformationItem key={item.id}>
                        <a>{item.value}</a>
                      </BlockInformationItem>
                    );
                  })}
              </div>
              <div>
                {aboutUsData
                  .filter(item => item.id % 2 === 0)
                  .map(item => {
                    return (
                      <BlockInformationItem key={item.id}>
                        {item.value}
                      </BlockInformationItem>
                    );
                  })}
              </div>
            </BlockInformation>
            <BlockSocial>
              {socialData.map(s => {
                return (
                  <a key={s.id} href={s.href} target='_blank' rel='noreferrer'>
                    <ImageFooter src={s.img} />
                  </a>
                );
              })}
            </BlockSocial>
          </BlockAboutUs>
          <div>© Copyright 2023 Modsen. All rights reserved | Privacy policy</div>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
