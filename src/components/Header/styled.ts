import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.headerFooterBackground};

  @media (max-width: 602px) {
    height: 100px;
    width: 100vw;
    padding: 5px 0;
  }
`;
export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 10px 0;
`;
export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 602px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
`;
export const BlockLogoApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  @media (max-width: 602px) {
    justify-content: flex-start;
    align-items: center;
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
  }
`;
export const BlockNameApp = styled.div`
  font-family: 'Rockwell Condensed', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: ${props => props.theme.colors.fontColor};
`;
export const BlockImageApp = styled.img`
  max-width: 33px;
  max-height: 33px;
`;
