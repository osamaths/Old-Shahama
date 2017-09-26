var MovieListEntry = ({movie, onClick}) => (
  <div id='mainContainer' className="row">
    <div className="well well-fuild col-lg-8 col-md-6 col-sm-12 col-xs-12">
      <div className = "media"></div>
      <div className = "media-left">
        <img className = "media-object" src = {movie.imgURL} width = "200px" onClick = {() => {onClick(movie)}}/>
      </div>
      <div className = "media-body">
        <div className = "media-heading"><h1>{movie.title}</h1></div>
        <p>{movie.desc}</p>
      </div>
    </div>
  </div>
)
window.MovieListEntry = MovieListEntry;
