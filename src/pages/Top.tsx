import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { fetchPopularData } from '../apis';
import { Store } from '../store';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem';

const Top: React.FC = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then(({ data: { items } }) => {
      setGlobalState({
        type: 'SET_POPULAR',
        payload: {
          popular: items,
        },
      });
    });
  }, [setGlobalState]);
  return (
    <div className="Top">
      <Layout>
        <VideoGrid>
          {globalState.popular.map((item: { id: number; snippet: any }) => {
            return (
              <VideoGridItem
                key={item.id}
                id={item.id}
                src={item.snippet.thumbnails.standard.url}
                title={item.snippet.title}
              />
            );
          })}
        </VideoGrid>
      </Layout>
    </div>
  );
};

export default Top;
