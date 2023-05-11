import styled from 'styled-components';

export const ButtonItemSearch = styled.button`
  height: 37px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease 0s;

  &:disabled {
    opacity: 0.5;

    &:hover {
      transform: none;
    }
  }

  &:hover {
    opacity: 0.9;
  }
`;
export const SearchIMG = styled.img`
  width: 15px;
  height: 15px;
`;
export const ButtonItemCategories = styled.button`
  text-align: center;
  margin: 2px;
  padding: 5px 10px;
  cursor: pointer;
  font-family: 'Rockwell Condensed', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: none;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
  background-color: #e5e4e8;

  &:disabled {
    opacity: 0.5;

    &:hover {
      transform: none;
    }
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(-1px);
    background: #212121;
    color: #ffffff;
  }
`;
export const ButtonItemOther = styled.button`
  background-color: rgb(241, 121, 0);
  text-align: center;
  margin: 2px;
  padding: 5px 10px;
  cursor: pointer;
  font-family: 'Rockwell Condensed', sans-serif;
  border: none;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;

  &:disabled {
    opacity: 0.5;

    &:hover {
      transform: none;
    }
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(-1px);
    background: #212121;
  }
`;
