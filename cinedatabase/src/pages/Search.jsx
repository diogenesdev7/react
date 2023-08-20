import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieList from './MovieList'
import MovieCard from '../components/MovieCard'
import '../styles/search.sass'

const Search = () => {
  const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
  const apiKey = '2f6d0f310c4df0be9b7634054b419c1b'

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get('q')

  useEffect(() => {
    fetch(`${searchUrl}${apiKey}&query=${query}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])




  return (
    <div className='container-search'>
      <h3>Resultados para: {query}</h3>
      <div className="movie-list">{movies.map(movie => <MovieCard className='card' movie={movie} key={movie.id} />)}</div>
    </div>
  )
}

export default Search