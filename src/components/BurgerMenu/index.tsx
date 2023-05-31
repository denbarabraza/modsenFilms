import React, { FC, memo } from 'react';

import { IBurgerMenu } from './interface';
import { StyledBurgerMenu } from './styled';

export const BurgerMenu: FC<IBurgerMenu> = memo(({ open, setOpen }) => (
  <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurgerMenu>
));
