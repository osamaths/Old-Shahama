class App extends React.Component {
  constructor(props) {
    super (props);
  }
  onClick (movie){
    console.log(movie);
    $.ajax({
      url: 'http://127.0.0.1:3000/addToWatchList',
      type: 'POST',
      data: movie,
      dataType: 'json'
    });
  }
  render (){
    return (
      <div>
        <NavBar />
        <MovieList onClick = {this.onClick.bind(this)} moviesHolder = {window.moviesHolder}/>
      </div>
    );
  }
}
