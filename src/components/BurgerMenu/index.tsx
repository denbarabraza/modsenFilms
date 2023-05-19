import React, { FC, memo } from 'react';

import { IBurgerMenu } from '@/components/BurgerMenu/interface';
import { StyledBurgerMenu } from '@/components/BurgerMenu/styled';

export const BurgerMenu: FC<IBurgerMenu> = memo(({ open, setOpen }) => (
  <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurgerMenu>
));
