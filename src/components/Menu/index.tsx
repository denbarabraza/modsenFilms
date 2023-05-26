import React, { useRef, useState } from 'react';
import { BurgerMenu } from 'src/components/BurgerMenu';

import { StyledLink, StyledMenu } from '@/components/Menu/styled';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

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
