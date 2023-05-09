import React, { FC, memo } from 'react';
import styled from 'styled-components';

import search from '@/assets/image/search.png';

const ButtonItemSearch = styled.button`
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
const SearchIMG = styled.img`
  width: 15px;
  height: 15px;
`;
const ButtonItemCategories = styled.button`
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
const ButtonItemOther = styled.button`
  background-color: rgb(243, 109, 2);
  text-align: center;
  margin: 2px;
  padding: 5px 10px;
  cursor: pointer;
  font-family: 'Rockwell Condensed', sans-serif;
  border: none;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

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

interface ButtonType {
  title: string;
  type: 'search' | 'categories' | 'other';
  isValid?: boolean;
  callBack?: () => void;
}

export const Button: FC<ButtonType> = memo(({ title, isValid, callBack, type }) => {
  let item;

  switch (type) {
    case 'search':
      item = (
        <ButtonItemSearch
          onClick={callBack}
          disabled={isValid ? !isValid : false}
          type='button'
        >
          <SearchIMG src={search} alt='search' />
        </ButtonItemSearch>
      );
      break;
    case 'categories':
      item = (
        <ButtonItemCategories
          onClick={callBack}
          disabled={isValid ? !isValid : false}
          type='button'
        >
          {title}
        </ButtonItemCategories>
      );
      break;
    case 'other':
      item = (
        <ButtonItemOther
          onClick={callBack}
          disabled={isValid ? !isValid : false}
          type='button'
        >
          {title}
        </ButtonItemOther>
      );
      break;
    default:
      item = <div>Please specify the type in the button component</div>;
  }

  return item;
});
