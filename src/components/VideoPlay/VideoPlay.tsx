import React from 'react';
import YouTube from 'react-youtube';
import Style from './_VideoPlay.module.scss';

type Props = {
  id: string;
};

const VideoPlay: React.FC<Props> = ({ id }) => {
  return (
    <div className={Style.wrap}>
      <YouTube videoId={id} className={Style.video} />
    </div>
  );
};

export default VideoPlay;
