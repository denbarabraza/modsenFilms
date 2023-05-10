import React from 'react';
import styled from 'styled-components';

import youtube from '@/assets/image/youtube.png';
import { Button } from '@/components/Button';
import { categoriesFilms } from '@/constans/categoriesFilms';

const Container = styled.div`
  min-height: 80vh;
  background-color: ${props => props.theme.colors.mainBackground};
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
  padding: 7px 0;
  border-bottom: 1px solid ${props => props.theme.colors.mainBorder};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 5vh;
  @media (max-width: 467px) {
    height: 9vh;
    padding-bottom: 20px;
  }
`;
const BlockShowMore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 8vh;
  border-top: 1px solid ${props => props.theme.colors.mainBorder};
`;
const BlockFilmsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px 0;
  @media (max-width: 574px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const FilmsCard = styled.div`
  background-color: ${props => props.theme.colors.filmsCardBackground};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 3px 2px ${props => props.theme.colors.boxShadow};
`;

const FilmsPoster = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  border-radius: 5px;
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
              return (
                <FilmsCard>
                  <FilmsPoster src={youtube} alt={e.value} />
                  <div>{e.value}</div>
                </FilmsCard>
              );
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
