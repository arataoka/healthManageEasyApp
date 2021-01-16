import axios from 'axios';

const KEY = 'AIzaSyAYEZPNCguWvQi86W-8sSteKETHD5UzAEg';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

const commonParams = {
  part: 'snippet',
  maxResults: 8,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
};

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...commonParams,
      chart: 'mostPopular',
    },
  });
};

export const fetchSelectedData = async (id?: string) => {
  return await youtube.get('/videos', {
    params: {
      ...commonParams,
      id,
    },
  });
};

export const fetchRelatedData = async (id?: string) => {
  return await youtube.get('/search', {
    params: {
      ...commonParams,
      relatedToVideoId: id,
    },
  });
};

export const fetchSearchData = async (query?: string) => {
  return await youtube.get('/search', {
    params: {
      ...commonParams,
      q: query,
    },
  });
};
