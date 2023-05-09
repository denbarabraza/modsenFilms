import React from 'react';
import styled from 'styled-components';

import { aboutUsData } from '@/constans/aboutUsData';
import { socialData } from '@/constans/socialData';

const Container = styled.div`
  width: 100%;
  min-height: 12vh;
  background-color: #ececec;
  box-shadow: 0 -4px 4px -2px rgba(0, 0, 0, 0.2);
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
  justify-content: space-between;
  height: 100%;
`;
const BlockSocial = styled.div`
  display: flex;
  gap: 30px;
`;
const IconFooter = styled.img`
  width: 25px;
  height: 25px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
`;
const BlockAboutUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0 20px 0;
`;
const BlockInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
const BlockInfoEl = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.83);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: rgb(243, 109, 2);
  }
`;
const BlockInfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const BlockRightsInfo = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 10px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockAboutUs>
            <BlockInfo>
              <BlockInfoItem>
                {aboutUsData
                  .filter(item => item.id % 2 === 1)
                  .map(item => {
                    return (
                      <BlockInfoEl key={item.id} href={item.href} target='_blank'>
                        {item.value}
                      </BlockInfoEl>
                    );
                  })}
              </BlockInfoItem>
              <BlockInfoItem>
                {aboutUsData
                  .filter(item => item.id % 2 === 0)
                  .map(item => {
                    return (
                      <BlockInfoEl key={item.id} href={item.href} target='_blank'>
                        {item.value}
                      </BlockInfoEl>
                    );
                  })}
              </BlockInfoItem>
            </BlockInfo>
            <BlockSocial>
              {socialData.map(s => {
                return (
                  <a key={s.id} href={s.href} target='_blank' rel='noreferrer'>
                    <IconFooter src={s.img} />
                  </a>
                );
              })}
            </BlockSocial>
          </BlockAboutUs>
          <BlockRightsInfo>
            © Copyright 2023 Modsen. All rights reserved | Privacy policy
          </BlockRightsInfo>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
