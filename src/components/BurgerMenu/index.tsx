import React, { FC } from 'react';

import { IBurgerMenu } from '@/components/BurgerMenu/interface';
import { StyledBurgerMenu } from '@/components/BurgerMenu/styled';

export const BurgerMenu: FC<IBurgerMenu> = ({ open, setOpen }) => (
  <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurgerMenu>
);
