import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: #a889f1;
`;
const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
const BlockCategory = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;
const BlockShowMore = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
const BlockFilmsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 20px;
  justify-content: space-around;
  align-items: flex-start;
  border: 1px solid black;
  gap: 1.3rem;
`;
const FilmsItem = styled.div`
  display: flex;
  border: 1px solid black;
  width: 23%;
  height: 300px;
`;

export const Main = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockCategory>
            {[1, 2, 3, 4, 5, 6, 7].map(e => {
              return <button>{e}</button>;
            })}
          </BlockCategory>
          <BlockFilmsList>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(e => {
              return <FilmsItem>{e}</FilmsItem>;
            })}
          </BlockFilmsList>
          <BlockShowMore>
            <button>Show More</button>
          </BlockShowMore>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
