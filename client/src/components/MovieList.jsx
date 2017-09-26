var MovieList = ({moviesHolder, onClick}) => (
  <div>
    {
      moviesHolder.map( (movie) => (
        <MovieListEntry movie = {movie} onClick = {onClick}/>
      ))
    }
  </div>
)

window.MovieList = MovieList;
