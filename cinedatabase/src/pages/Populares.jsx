import MovieList from './MovieList'

const Populares = () => {
  return (
    <div>
      <MovieList apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=2f6d0f310c4df0be9b7634054b419c1b&language=pt-BR&page=1' />
    </div>
  )
}

export default Populares