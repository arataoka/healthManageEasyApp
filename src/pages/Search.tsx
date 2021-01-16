import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import { fetchSearchData } from '../apis';
import { Store } from '../store';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem';
import VideoGrid from '../components/VideoGrid/VideoGrid';

const Search = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      const searchParams = new URLSearchParams(location.search);
      const query = searchParams.get('query');
      if (!query) return;
      const res = await fetchSearchData(query);
      setGlobalState({
        type: 'SET_SEARCHED',
        payload: { searched: res.data.items },
      });
    })();
  }, [location.search, setGlobalState]);
  return (
    <Layout>
      <VideoGrid>
        {globalState.searched.length ? (
          globalState.searched.map(
            (item: { id: { videoId: string }; snippet: any }) => {
              return (
                <VideoGridItem
                  id={Number(item.id.videoId)}
                  key={item.id.videoId}
                  src={item.snippet.thumbnails.medium.url}
                  title={item.snippet.title}
                />
              );
            }
          )
        ) : (
          <span>nodata</span>
        )}
      </VideoGrid>
    </Layout>
  );
};

export default Search;
