import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

import { IOnSearch, ISearchControlResult } from '@/components/Search/interface';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useDebounce } from '@/hooks/useDebounce';
import { getTitleSelector } from '@/store/selectors/filmsSelectors';

export const useSearchControl = (onSearch: IOnSearch): ISearchControlResult => {
  const initialValue = useAppSelector(getTitleSelector);

  const [searchTerm, setSearchTerm] = useState<string>(initialValue);
  const [isHintsOpen, setIsHintsOpen] = useState<boolean>(false);

  const debouncedValue = useDebounce<string>(searchTerm, 400);

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
    if (event.key === 'Enter') handleClick();
  };

  const onClickDel = () => {
    setSearchTerm('');
    setIsHintsOpen(false);
    onSearch('');
  };

  const handleResultClick = (title: string) => {
    onSearch(title);
    setIsHintsOpen(false);
  };

  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  return {
    searchTerm,
    onChange,
    onKeyUp,
    onClickDel,
    handleClick,
    isHintsOpen,
    debouncedValue,
    handleResultClick,
  };
};
