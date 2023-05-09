import React, { ChangeEvent, FC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import del from '@/assets/image/close.png';
import { Button } from '@/components/Button';

const Container = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const InputContainer = styled.div`
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const InputItem = styled.input`
  width: 400px;
  height: 100%;
  padding-left: 10px;
  transition: all 0.2s ease 0s;
  font-family: 'Rockwell Condensed', sans-serif;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid #939292;

  &:focus {
    border: 1px solid #212121;
  }
`;
const DelIcon = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
`;

interface SearchPropsType {
  initialValue: string;
  onChange: (value: string) => void;
}

export const Search: FC<SearchPropsType> = memo(({ initialValue, onChange }) => {
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    onChange(value);
  };
  const onClickDelHandler = () => {
    setValue('');
  };

  return (
    <Container>
      <InputContainer>
        <InputItem
          key={initialValue}
          type='text'
          placeholder='Search by name'
          value={value}
          onChange={handleChange}
        />
        <DelIcon src={del} alt='del icon' onClick={onClickDelHandler} />
      </InputContainer>
      <Button title='ser' callBack={handleClick} type='search' />
    </Container>
  );
});
