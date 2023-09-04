import MovieCard from "../components/MovieCard";
import '../styles/movie-list.sass'

export default function Populares() {
    return (
        <section className="movie-list">
                <MovieCard genre='popular' />
        </section>
    )
}