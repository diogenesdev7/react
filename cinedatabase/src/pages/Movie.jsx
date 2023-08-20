import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import '../styles/Movie.sass'


const Movie = () => {
    
    const { id } = useParams()
    const apiKey = '2f6d0f310c4df0be9b7634054b419c1b'
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    const lang = '&language=pt-BR&page=1'
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`${url}${lang}`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])


    console.log(movie)

    const formatCurrency = (number) => {
        return number.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    const formatDate = (number) => {
        return new Date(number).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }

  return (
    <div>
        {movie ? (
            <div className='movie'>
                <img src={imgUrl + movie.poster_path} alt="" />
                <h2>{movie.tagline}</h2>
                <div className="info">

                    <div>
                        <h3>Lançamento:</h3>
                        <p>{formatDate(movie.release_date)}</p>
                    </div>

                    <div>
                        <h3>Orçamento:</h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>

                    <div>
                        <h3>Receita:</h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    
                    <div className='rating'>
                        <AiFillStar />
                        <p>{movie.vote_average.toFixed(1)}</p>
                    </div>
                </div>

                <h3>Sinopse</h3>
                <p>{movie.overview}</p>

            </div>
        ) : (
            <div><p>carregando...</p></div>
        )}
        
    </div>
  )
}

export default Movie