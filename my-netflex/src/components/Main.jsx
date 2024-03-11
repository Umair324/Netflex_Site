import React, { useEffect, useState } from 'react';
import axios from 'axios';
import request from '../Request';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.trending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

//   console.log(movie);
const turncateString = (str,num) => {
    if(str?.length >num)
    {
        return str.slice(0,num) + '...'
    } else {
        return str;
    }
}

  return (
    <div className='w-full h-screen text-white'>
      <div className='w-full h-full'>
        <div className=' absolute w-full h-screen bg-gradient-to-t from-black'>  </div>
        <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-full top-[30%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold '>{movie?.title}</h1>
        <div className='my-4'>
           <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button> 
           <button  className='border border-gray-300 py-2 px-5 ml-4 text-white'>Watch later</button>
        </div>
        <p className='text-gray-400 text-sm'>Released:{movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{turncateString(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;