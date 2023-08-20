import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import '../styles/movieList.sass'

const apiKey = '2f6d0f310c4df0be9b7634054b419c1b'
const url = 'https://api.themoviedb.org/3/movie/popular?api_key='
const lang = '&language=pt-BR&page=1'
const imgUrl = 'https://image.tmdb.org/t/p/w500/'

const MovieList = ({apiUrl}) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [query])

  console.log(movies)

  return (
    <div className='container-populares'>
      {movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />
                
      })}
    </div>
  )
}

export default MovieList