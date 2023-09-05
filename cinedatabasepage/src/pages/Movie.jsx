import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AiFillStar } from 'react-icons/ai'

import '../styles/movie.sass'

export default function Movie () {

    const { id } = useParams()
    const apiKey = '2f6d0f310c4df0be9b7634054b419c1b'
    const lang = '&language=pt-BR&page=1'
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}${lang}`
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'

    const [movie, setMovie] = useState({})

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        getMovie(url)
    }, [])

    const formatCurrency = (number) => {
        if (typeof number === 'number')
        return number.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    const formatDate = (number) => {
        if (typeof number === 'number')
        return new Date(number).toLocaleString('pt-BR', {day: 2-digit, month: 2-digit, year: numeric})
    }

    console.log(movie.budget)

    return (
        <section className='movie'>
            <img src={imgUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.tagline}</h2>
            <div className="movie-info">
                <div>
                    <p>Data de lançamento:</p>
                    <p>{formatDate(movie.release_date)}</p>
                </div>
                <div>
                    <p>Orçamento:</p>
                    <p>{formatCurrency(movie.budget)}</p>
                </div>
                <div>
                    <p>Receita:</p>
                    <p>{formatCurrency(movie.revenue)}</p>
                </div>
                <div>
                    <AiFillStar />
                    <p>{movie.vote_average !== undefined ? movie.vote_average.toFixed(1) : 'N/A'}</p>
                </div>
            </div>
            <p>{movie.overview}</p>

        </section>
    )
}