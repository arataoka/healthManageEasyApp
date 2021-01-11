import React, { useEffect, useContext } from 'react';
import { fetchRelatedData } from '../../apis';
import { Store } from '../../store';
import SideListItem from '../SideListItem/SideListItem';
import Style from './_SideList.module.scss';

const SideList: React.FC = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchRelatedData(globalState.selected.id).then(({ data: { items } }) => {
      console.log(items);
      setGlobalState({ type: 'SET_RELATED', payload: { related: items } });
    });
  }, [globalState.selected]);

  return (
    <div className={Style.sideNav}>
      {globalState.related ? (
        globalState.related.map(
          (item: { id: { videoId: string }; snippet: any }) => {
            return (
              <SideListItem
                id={item.id.videoId}
                key={item.id.videoId}
                src={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
              />
            );
          }
        )
      ) : (
        <span>なし</span>
      )}
    </div>
  );
};

export default SideList;
