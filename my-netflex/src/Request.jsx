
const key = '8d125baac2a46cc9f98bdccb8eff7696';

const request = {
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
};

export default request;
