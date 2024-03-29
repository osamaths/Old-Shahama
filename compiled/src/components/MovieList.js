"use strict";

var MovieList = function MovieList(_ref) {
  var moviesHolder = _ref.moviesHolder,
      onClick = _ref.onClick;
  return React.createElement(
    "div",
    null,
    moviesHolder.map(function (movie) {
      return React.createElement(MovieListEntry, { movie: movie, onClick: onClick });
    })
  );
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzSG9sZGVyIiwib25DbGljayIsIm1hcCIsIm1vdmllIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUVDLFlBQUYsUUFBRUEsWUFBRjtBQUFBLE1BQWdCQyxPQUFoQixRQUFnQkEsT0FBaEI7QUFBQSxTQUNkO0FBQUE7QUFBQTtBQUVJRCxpQkFBYUUsR0FBYixDQUFrQixVQUFDQyxLQUFEO0FBQUEsYUFDaEIsb0JBQUMsY0FBRCxJQUFnQixPQUFTQSxLQUF6QixFQUFnQyxTQUFXRixPQUEzQyxHQURnQjtBQUFBLEtBQWxCO0FBRkosR0FEYztBQUFBLENBQWhCOztBQVVBRyxPQUFPTCxTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVMaXN0ID0gKHttb3ZpZXNIb2xkZXIsIG9uQ2xpY2t9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIHtcclxuICAgICAgbW92aWVzSG9sZGVyLm1hcCggKG1vdmllKSA9PiAoXHJcbiAgICAgICAgPE1vdmllTGlzdEVudHJ5IG1vdmllID0ge21vdmllfSBvbkNsaWNrID0ge29uQ2xpY2t9Lz5cclxuICAgICAgKSlcclxuICAgIH1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDtcclxuIl19