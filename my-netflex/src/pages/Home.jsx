import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'
const Home = () => {
  return (
    <>
     <Main />
     <Row rowID='1' title='Upcoming' fetchURL={request.upcoming} />
     <Row rowID='2' title='topRated' fetchURL={request.topRated} />
     <Row rowID='3' title='Trending' fetchURL={request.trending} />
     <Row rowID='4' title='popular' fetchURL={request.Popular} />
    </>
  )
}

export default Home