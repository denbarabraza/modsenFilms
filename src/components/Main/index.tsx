import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { categoriesFilms } from '@/constans/categoriesFilms';

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
`;
const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BlockCategory = styled.div`
  display: flex;
  margin: 10px 0;
  border-bottom: 1px solid #bebebe;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;
const BlockShowMore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 8vh;
  border-top: 1px solid #bebebe;
`;
const BlockFilmsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0;
  justify-content: space-between;
  align-items: flex-start;
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
            {categoriesFilms.map(e => {
              return (
                <Button
                  key={e.id}
                  title={e.value}
                  callBack={() => console.log(e.value.toLowerCase())}
                  type='categories'
                />
              );
            })}
          </BlockCategory>
          <BlockFilmsList>
            {categoriesFilms.map(e => {
              return <FilmsItem>{e.value}</FilmsItem>;
            })}
          </BlockFilmsList>
          <BlockShowMore>
            <Button title='Show More' type='other' />
          </BlockShowMore>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
