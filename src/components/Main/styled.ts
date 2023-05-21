import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  min-height: 80vh;
  background-color: ${props => props.theme.colors.mainBackground};
`;
export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GenreItem = styled.div`
  display: flex;
  padding: 7px 0;
  border-bottom: 1px solid ${props => props.theme.colors.mainBorder};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 5vh;
  @media (max-width: 1030px) {
    height: 9vh;
    padding-bottom: 10px;
  }
  @media (max-width: 550px) {
    height: 11vh;
    padding-bottom: 10px;
  }
  @media (max-width: 400px) {
    height: 15vh;
    padding-bottom: 10px;
  }
`;
export const BlockShowMore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 8vh;
  border-top: 1px solid ${props => props.theme.colors.mainBorder};
`;
export const BlockFilmsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px 0;
  @media (max-width: 574px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const FilmsCard = styled.div`
  background-color: ${props => props.theme.colors.filmsCardBackground};
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 3px 2px ${props => props.theme.colors.boxShadow};
  animation: ${slideInFromBottom} 0.5s ease-out;

  display: grid;
  grid-template-rows: 1.5fr 0.25fr 1fr;

  &:hover {
    box-shadow: 0 2px 3px 2px ${props => props.theme.colors.hoverBoxShadow};
  }
`;

export const FilmsPoster = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1rem;
`;

export const InfoItem = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin: 20px 0;
`;
