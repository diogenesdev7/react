import MovieCard from "../components/MovieCard"


const Top20 = () => {
  return (
    <section className='movie-list'>
        <MovieCard genre='top_rated' />
    </section>
  )
}

export default Top20