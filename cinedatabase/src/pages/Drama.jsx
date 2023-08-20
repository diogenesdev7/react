import React from 'react'
import MovieList from './MovieList'

const Drama = () => {
  return (
    <div>
        <MovieList apiUrl='https://api.themoviedb.org/3/discover/movie?api_key=2f6d0f310c4df0be9b7634054b419c1b&with_genres=18' />
    </div>
  )
}

export default Drama