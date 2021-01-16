import React, { useContext } from 'react';
import { Store } from '../../store';
import VideoPlay from '../VideoPlay/VideoPlay';
import Style from './_VideoDetail.module.scss';
import Linkify from 'react-linkify';
type Props = {};

const Videodetail: React.FC = () => {
  const { globalState } = useContext(Store);
  return globalState.selected ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <div>NO DATA</div>
  );
};

export default Videodetail;
