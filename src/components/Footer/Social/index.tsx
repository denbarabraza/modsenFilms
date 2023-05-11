import React, { memo } from 'react';

import { BlockSocial, IconFooter } from '@/components/Footer/styled';
import { socialData } from '@/constans/socialData';

export const CBlockSocial = memo(() => {
  return (
    <BlockSocial>
      {socialData.map(s => {
        return (
          <a key={s.id} href={s.href} target='_blank' rel='noreferrer'>
            <IconFooter src={s.img} />
          </a>
        );
      })}
    </BlockSocial>
  );
});
