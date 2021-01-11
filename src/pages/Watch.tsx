import React from 'react';
import Layout from '../components/Layout/Layout';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import SideList from '../components/SideList/SideList';

function Watch() {
  return (
    <div className="Watch">
      <Layout>
        <VideoDetail />
        <SideList />
      </Layout>
    </div>
  );
}

export default Watch;
