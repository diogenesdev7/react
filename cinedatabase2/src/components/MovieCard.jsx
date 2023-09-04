import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AiFillStar } from 'react-icons/ai'

export default function MovieCard({ urltype='movie', genre }) {
    const apiKey = '2f6d0f310c4df0be9b7634054b419c1b'
    const url = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`
    const urlGenre = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`
    const lang = '&language=pt-BR&page=1'
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(urltype === 'genres' ? urlGenre + lang : url + lang)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])

    console.log(movies)

    return (
        <>
            {movies.map((movie) => {
                return <div className="movie-card" key={movie.id}>
                            <Link to={`/movie/${movie.id}`}><img src={imgUrl + movie.poster_path} alt={movie.title} /></Link>
                            <div className="card-info">
                                <Link to={`movie/${movie.id}`}>
                                    <h2>{movie.title}</h2>
                                </Link>
                                <div className="rating">
                                    <AiFillStar />
                                    <p>{movie.vote_average.toFixed(1)}</p>
                                </div>
                            </div>
                       </div>
            })}
        </>
    )
}