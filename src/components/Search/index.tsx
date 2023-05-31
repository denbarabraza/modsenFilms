import React, { FC, memo } from 'react';

import del from '@/assets/image/close.png';
import { Button } from '@/components/Button';
import { HintsBlock } from '@/components/Search/HintsBlock';
import { useSearchControl } from '@/hooks/useSearchControl';

import { ISearch } from './interface';
import { Container, DelIcon, InputContainer, InputItem } from './styled';

export const Search: FC<ISearch> = memo(({ onSearch }) => {
  const {
    searchTerm,
    onChange,
    onKeyUp,
    onClickDel,
    handleClick,
    isHintsOpen,
    debouncedValue,
    handleResultClick,
  } = useSearchControl(onSearch);

  return (
    <Container>
      <InputContainer>
        <InputItem
          data-cy='inputItem'
          type='text'
          placeholder='Search by title'
          value={searchTerm}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <DelIcon data-cy='deleteIcn' src={del} alt='del icon' onClick={onClickDel} />
      </InputContainer>
      <Button title='searchButton' callBack={handleClick} type='search' />
      {isHintsOpen && (
        <HintsBlock searchTerm={debouncedValue} onClickSelectHint={handleResultClick} />
      )}
    </Container>
  );
});
