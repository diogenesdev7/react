import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const imgUrl = 'https://image.tmdb.org/t/p/w500'



const MovieCard = ({movie}) => {
  
  const {id} = useParams()
  console.log(id)

  return (
        <div className='card'>
            <Link to={`/movie/${movie.id}`}>
              <img src={imgUrl + movie.poster_path} alt={movie.title} />
              <h2>{movie.title}</h2>
              <div className="rating">
                  <AiFillStar />
                  <p>{movie.vote_average.toFixed(1)}</p>
              </div>
            </Link>
        </div>
  )
}

export default MovieCard