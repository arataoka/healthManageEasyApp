import React from 'react';
import Style from './_VideoGrid.module.scss';

type Props = {
  children: React.ReactNode;
};

const VideoGrid: React.FC<Props> = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};

export default VideoGrid;
