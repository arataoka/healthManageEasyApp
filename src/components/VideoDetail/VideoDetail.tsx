import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData } from '../../apis';
import { Store } from '../../store';
import VideoPlay from '../VideoPlay/VideoPlay';
import Style from './_VideoDetail.module.scss';
import Linkify from 'react-linkify';
type Props = {};

const Videodetail: React.FC = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('v');
    if (!id) return;
    fetchSelectedData(id).then(({ data: { items } }) => {
      const item = items.shift();
      setGlobalState({ type: 'SET_SELECTED', payload: { selected: item } });
    });
  }, []);
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
