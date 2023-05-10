import React from 'react';
import styled from 'styled-components';

import { aboutUsData } from '@/constans/aboutUsData';
import { socialData } from '@/constans/socialData';

const Container = styled.div`
  width: 100%;
  min-height: 12vh;
  background-color: ${props => props.theme.colors.headerFooterBackground};
  box-shadow: 0 -4px 4px -2px ${props => props.theme.colors.boxShadow};
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
  @media (max-width: 605px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const BlockInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
const BlockInfoEl = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${props => props.theme.colors.fontColor};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: rgb(241, 121, 0);
  }

  @media (max-width: 465px) {
    font-size: 16px;
  }
`;
const BlockInfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const BlockRightsInfo = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.fontColor};

  @media (max-width: 465px) {
    font-size: 14px;
  }
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
