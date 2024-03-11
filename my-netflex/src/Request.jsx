const key = '8d125baac2a46cc9f98bdccb8eff7696';

const request = {
   upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
   Popular: `  http://api.themoviedb.org/3/movie/popular?language=sv&api_key=${key}`,
   trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
   topRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${key}`,
};

export default request;
