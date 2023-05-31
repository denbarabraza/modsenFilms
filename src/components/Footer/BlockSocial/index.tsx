import React from 'react';

import { BlockSocialItem, IconFooter } from '@/components/Footer/styled';
import { socialData } from '@/constans/socialData';

export const BlockSocial = () => {
  return (
    <BlockSocialItem>
      {socialData.map(social => {
        const { id, href, img } = social;

        return (
          <a key={id} href={href} target='_blank' rel='noreferrer'>
            <IconFooter src={img} />
          </a>
        );
      })}
    </BlockSocialItem>
  );
};
