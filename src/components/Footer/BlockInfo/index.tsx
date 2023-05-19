import React, { FC, memo } from 'react';

import { IBlockInfo } from '@/components/Footer/BlockInfo/interface';
import { BlockInfoEl, BlockInfoItem } from '@/components/Footer/styled';
import { aboutUsData } from '@/constans/aboutUsData';

export const BlockInfo: FC<IBlockInfo> = memo(({ rules }) => {
  return (
    <BlockInfoItem>
      {aboutUsData
        .filter(item => item.id % 2 === rules)
        .map(item => {
          return (
            <BlockInfoEl key={item.id} href={item.href} target='_blank'>
              {item.value}
            </BlockInfoEl>
          );
        })}
    </BlockInfoItem>
  );
});
