import React, { ChangeEvent, FC, memo, useEffect, useState } from 'react';

import del from '@/assets/image/close.png';
import { Button } from '@/components/Button';
import { ISearch } from '@/components/Search/interface';
import {
  Container,
  DelIcon,
  InputContainer,
  InputItem,
} from '@/components/Search/styled';

export const Search: FC<ISearch> = memo(({ initialValue, onChange }) => {
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
