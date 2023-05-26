import React from 'react';

import { BlockSocialItem, IconFooter } from '@/components/Footer/styled';
import { socialData } from '@/constans/socialData';

export const BlockSocial = () => {
  return (
    <BlockSocialItem>
      {socialData.map(s => {
        return (
          <a key={s.id} href={s.href} target='_blank' rel='noreferrer'>
            <IconFooter src={s.img} />
          </a>
        );
      })}
    </BlockSocialItem>
  );
};
