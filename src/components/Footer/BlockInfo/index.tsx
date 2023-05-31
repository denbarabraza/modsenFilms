import React, { FC, memo } from 'react';

import { IBlockInfo } from '@/components/Footer/BlockInfo/interface';
import { BlockInfoEl, BlockInfoItem } from '@/components/Footer/styled';
import { aboutUsData } from '@/constans/aboutUsData';

export const BlockInfo: FC<IBlockInfo> = memo(({ rules }) => {
  return (
    <BlockInfoItem>
      {aboutUsData
        .filter(aboutUsItem => aboutUsItem.id % 2 === rules)
        .map(aboutUsItem => {
          const { id, href, value } = aboutUsItem;

          return (
            <BlockInfoEl key={id} href={href} target='_blank'>
              {value}
            </BlockInfoEl>
          );
        })}
    </BlockInfoItem>
  );
});
