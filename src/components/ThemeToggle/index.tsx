import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IContainerTheme } from '@/components/App';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  user-select: none;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ theme: IContainerTheme }>`
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.toggleBackground};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.toggleCircle};
    top: 3px;
    left: 3px;
    transition: transform 0.2s ease-in-out;
  }

  ${Input}:checked + & {
    background-color: ${({ theme }) => theme.toggleBackgroundChecked};
  }

  ${Input}:checked + &::before {
    transform: translateX(20px);
  }
`;

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(theme === 'dark');

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    toggleTheme(isChecked ? 'light' : 'dark');
  };

  return (
    <Container>
      <Label>
        {isChecked ? 'Dark mode' : 'Light mode'}
        <Input type='checkbox' checked={isChecked} onChange={handleToggleChange} />
        <Slider />
      </Label>
    </Container>
  );
};
