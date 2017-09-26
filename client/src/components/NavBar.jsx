class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><b>Shahama</b></a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="http://localhost:3000/mywatchlist">My Watchlist</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
