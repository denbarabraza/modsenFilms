import React, { ChangeEvent, FC, KeyboardEvent, memo, useEffect, useState } from 'react';

import del from '@/assets/image/close.png';
import { Button } from '@/components/Button';
import { HintsBlock } from '@/components/Search/HintsBlock';
import { ISearch } from '@/components/Search/interface';
import {
  Container,
  DelIcon,
  InputContainer,
  InputItem,
} from '@/components/Search/styled';
import { useDebounce } from '@/hooks/useDebounce';

export const Search: FC<ISearch> = memo(({ initialValue, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue);
  const [isHintsOpen, setIsHintsOpen] = useState<boolean>(false);

  const debouncedValue = useDebounce<string>(searchTerm, 300);

  const handleClick = () => {
    onSearch(searchTerm.trim());
    setIsHintsOpen(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length > 0) setIsHintsOpen(true);
    else setIsHintsOpen(false);
  };

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const onClickDel = () => {
    setSearchTerm('');
    onSearch('');
  };

  const handleResultClick = (title: string) => {
    onSearch(title);
    setIsHintsOpen(false);
  };

  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  return (
    <Container>
      <InputContainer>
        <InputItem
          key={initialValue}
          type='text'
          placeholder='Search by title'
          value={searchTerm}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <DelIcon src={del} alt='del icon' onClick={onClickDel} />
      </InputContainer>
      <Button title='searchButton' callBack={handleClick} type='search' />
      {isHintsOpen && (
        <HintsBlock searchTerm={debouncedValue} onClickSelectHint={handleResultClick} />
      )}
    </Container>
  );
});
