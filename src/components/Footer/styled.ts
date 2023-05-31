import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 12vh;
  background-color: ${props => props.theme.colors.headerFooterBackground};
  box-shadow: 0 -4px 4px -2px ${props => props.theme.colors.boxShadow};
`;
export const Wrapper = styled.div`
  width: 90vw;
  height: 100%;
  margin: 0 auto;
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
export const BlockSocialItem = styled.div`
  display: flex;
  gap: 30px;
`;
export const IconFooter = styled.img`
  width: 25px;
  height: 25px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
`;
export const BlockAboutUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0 20px 0;
  @media (max-width: 705px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const BlockAboutUsInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
export const BlockInfoEl = styled.a`
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

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
export const BlockInfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BlockRightsInfo = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.fontColor};

  @media (max-width: 420px) {
    font-size: 12px;
  }
`;
