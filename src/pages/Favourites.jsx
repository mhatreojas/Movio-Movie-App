import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function favorites() {
  const { favorites } = useMovieContext()
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((favorite) => (
            <MovieCard movie={favorite} key={favorite.id} />))}
        </div>
      </div>
    )
  }
  else
  return <div className="favorites-empty">
    <h2> No Favourite Movies Yet</h2>
    <p> Start adding movies to your favourites and they will appear here</p>
  </div>
}
export default favorites;