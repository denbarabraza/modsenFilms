import React, { memo } from 'react';

import { IYoutubePlayer } from './interface';
import { Container, Video } from './styled';

export const YoutubePlayer: React.FC<IYoutubePlayer> = memo(({ videoId }) => {
  return (
    <Container>
      <Video src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} />
    </Container>
  );
});
