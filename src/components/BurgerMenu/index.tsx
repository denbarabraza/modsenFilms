import React, { FC } from 'react';

import { StyledBurgerMenu } from '@/components/BurgerMenu/styled';

export interface IHamburger {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export const BurgerMenu: FC<IHamburger> = ({ open, setOpen }) => (
  <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurgerMenu>
);
