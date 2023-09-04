import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import '../styles/search.sass'

import { AiFillStar } from 'react-icons/ai'

export default function Search() {

    const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
  const apiKey = '2f6d0f310c4df0be9b7634054b419c1b'
  const imgUrl = 'https://image.tmdb.org/t/p/w500/'
  const lang = '&language=pt-BR&page=1'

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get('q')

  useEffect(() => {
    fetch(`${searchUrl}${apiKey}&query=${query}${lang}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])

    console.log(movies)


    return (
        <div>
                <h3>Resultados para: {query}</h3>
            <section className='section-search'>
                {movies.map((movie) => {
                    return <div className='search-card' key={movie.id}>
                        <Link to={`/movie/${movie.id}`}><img src={`${imgUrl}${movie.poster_path}`} /></Link>
                        <Link to={`/movie/${movie.id}`}>
                            <h2>{movie.title}</h2>
                        </Link>
                        <div className="rating">
                            <AiFillStar />
                            <p>{movie.vote_average.toFixed(1)}</p>
                        </div>
                    </div>
                })}
            </section>
        </div>
    )
}