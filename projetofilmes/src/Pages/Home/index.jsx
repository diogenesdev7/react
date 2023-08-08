import { Container, Movie, MovieList } from "./styles"
import { useState, useEffect } from 'react'
import { APIKey } from '../../config/key'
import { Link } from 'react-router-dom'

export default function Home () {
  const [movies, setMovies] = useState([])
  const imgPath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))

  }, [])


    return (
        <Container>

            <h1>SpartaSeries</h1>

            <MovieList>

                {movies.map(e => {
                    return <Movie key={e.id}>
                              <Link to={`details/${e.id}`}>
                                <img src={`${imgPath}${e.poster_path}`} alt={e.name} />
                              </Link>
                              <span>{e.title}</span>
                           </Movie>
                })}

            </MovieList>

        </Container>
    )
}