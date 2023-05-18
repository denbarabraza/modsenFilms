import React from 'react';

import { IYoutubePlayer } from '@/components/YoutubePlayer/interface';
import { Container, Video } from '@/components/YoutubePlayer/styled';

export const YoutubePlayer: React.FC<IYoutubePlayer> = ({ videoId }) => {
  return (
    <Container>
      <Video
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allowFullScreen
      />
    </Container>
  );
};
