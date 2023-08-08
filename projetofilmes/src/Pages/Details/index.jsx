import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { APIKey } from '../../config/key'
import { Container } from './styles'


const Details = () => {
  
  const { id } = useParams()
  console.log(id)

  const imagePath = 'https://image.tmdb.org/t/p/w500/'


  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
          const movie = {
            id,
            title: data.title,
            sinopse: data.overview,
            image: imagePath + data.poster_path,
            releaseDate: data.release_date,
          }

          console.log(data)

          setMovie(movie)
        })
  }, id)


  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <p>Sinopse: {movie.sinopse}</p>
          <p className='release'>Release Date: {movie.releaseDate}</p>
          <Link to='/'>
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </Container>
  )

}

export default Details