import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { darkTheme, lightTheme } from '@/assets/theme/theme';
import { ThemeEnum } from '@/constans/themes';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 150px;
`;

const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  user-select: none;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSlider = styled.span`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.toggleBackground};
  border: 1px solid ${props => props.theme.colors.toggleBorder};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.toggleCircle};
    top: 2px;
    left: 3px;
    transition: transform 0.2s ease-in-out;
  }

  ${ToggleInput}:checked + & {
    background-color: ${props => props.theme.colors.toggleBackgroundChecked};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(20px);
  }
`;

export const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    setTheme(theme === ThemeEnum.light ? darkTheme : lightTheme);
  };

  return (
    <ToggleContainer>
      <ToggleLabel>
        <ToggleInput type='checkbox' checked={isChecked} onChange={handleToggleChange} />
        <ToggleSlider />
      </ToggleLabel>
    </ToggleContainer>
  );
};
