import React, { useRef, useState } from 'react';
import { BurgerMenu } from 'src/components/BurgerMenu';

import { ThemeToggle } from '@/components/ThemeToggle';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import { StyledLink, StyledMenu } from './styled';

export const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        Here you can change the theme...
        <StyledLink onClick={() => close()}>
          <ThemeToggle open={open} />
        </StyledLink>
      </StyledMenu>
      <BurgerMenu open={open} setOpen={setOpen} />
    </div>
  );
};
