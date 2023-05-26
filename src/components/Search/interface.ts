import { ChangeEvent, KeyboardEvent } from 'react';

export interface ISearch {
  onSearch: IOnSearch;
}

export interface IOnSearch {
  (value: string): void;
}

export interface ISearchControlResult {
  searchTerm: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClickDel: () => void;
  handleClick: () => void;
  isHintsOpen: boolean;
  debouncedValue: string;
  handleResultClick: (title: string) => void;
}
