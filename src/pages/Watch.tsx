import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout/Layout';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import SideList from '../components/SideList/SideList';
import { Store } from '../store';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData, fetchRelatedData } from '../apis';

const Watch: React.FC = () => {
  const { setGlobalState } = useContext(Store);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      const searchParams = new URLSearchParams(location.search);
      const id = searchParams.get('v');
      if (id) {
        const [selected, related] = await Promise.all([
          fetchSelectedData(id),
          fetchRelatedData(id),
        ]);
        setGlobalState({
          type: 'SET_SELECTED',
          payload: { selected: selected.data.items.shift() },
        });
        setGlobalState({
          type: 'SET_RELATED',
          payload: { related: related.data.items },
        });
      }
    })();
  }, [location.search, setGlobalState]);

  return (
    <div className="Watch">
      <Layout>
        <VideoDetail />
        <SideList />
      </Layout>
    </div>
  );
};

export default Watch;
