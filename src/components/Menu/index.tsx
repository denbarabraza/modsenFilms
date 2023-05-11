import React, { RefObject, useEffect, useRef, useState } from 'react';
import { BurgerMenu } from 'src/components/BurgerMenu';

import { StyledLink, StyledMenu } from '@/components/Menu/styled';
import { ThemeToggle } from '@/components/ThemeToggle';

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

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ref.current && event.target && ref.current.contains(event.target as Node)) {
        return;
      }
      closeMenu();
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, closeMenu]);
};
