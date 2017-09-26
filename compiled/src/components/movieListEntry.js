"use strict";

var MovieListEntry = function MovieListEntry(_ref) {
  var movie = _ref.movie,
      _onClick = _ref.onClick;
  return React.createElement(
    "div",
    { id: "mainContainer", className: "row" },
    React.createElement(
      "div",
      { className: "well well-fuild col-lg-8 col-md-6 col-sm-12 col-xs-12" },
      React.createElement("div", { className: "media" }),
      React.createElement(
        "div",
        { className: "media-left" },
        React.createElement("img", { className: "media-object", src: movie.imgURL, width: "200px", onClick: function onClick() {
            _onClick(movie);
          } })
      ),
      React.createElement(
        "div",
        { className: "media-body" },
        React.createElement(
          "div",
          { className: "media-heading" },
          React.createElement(
            "h1",
            null,
            movie.title
          )
        ),
        React.createElement(
          "p",
          null,
          movie.desc
        )
      )
    )
  );
};
window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIm1vdmllIiwib25DbGljayIsImltZ1VSTCIsInRpdGxlIiwiZGVzYyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBU0MsUUFBVCxRQUFTQSxPQUFUO0FBQUEsU0FDbkI7QUFBQTtBQUFBLE1BQUssSUFBRyxlQUFSLEVBQXdCLFdBQVUsS0FBbEM7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHVEQUFmO0FBQ0UsbUNBQUssV0FBWSxPQUFqQixHQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBWSxZQUFqQjtBQUNFLHFDQUFLLFdBQVksY0FBakIsRUFBZ0MsS0FBT0QsTUFBTUUsTUFBN0MsRUFBcUQsT0FBUSxPQUE3RCxFQUFxRSxTQUFXLG1CQUFNO0FBQUNELHFCQUFRRCxLQUFSO0FBQWUsV0FBdEc7QUFERixPQUZGO0FBS0U7QUFBQTtBQUFBLFVBQUssV0FBWSxZQUFqQjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVksZUFBakI7QUFBaUM7QUFBQTtBQUFBO0FBQUtBLGtCQUFNRztBQUFYO0FBQWpDLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBSUgsZ0JBQU1JO0FBQVY7QUFGRjtBQUxGO0FBREYsR0FEbUI7QUFBQSxDQUFyQjtBQWNBQyxPQUFPTixjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJNb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3RFbnRyeSA9ICh7bW92aWUsIG9uQ2xpY2t9KSA9PiAoXHJcbiAgPGRpdiBpZD0nbWFpbkNvbnRhaW5lcicgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGwgd2VsbC1mdWlsZCBjb2wtbGctOCBjb2wtbWQtNiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtZWRpYVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibWVkaWEtbGVmdFwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gXCJtZWRpYS1vYmplY3RcIiBzcmMgPSB7bW92aWUuaW1nVVJMfSB3aWR0aCA9IFwiMjAwcHhcIiBvbkNsaWNrID0geygpID0+IHtvbkNsaWNrKG1vdmllKX19Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm1lZGlhLWhlYWRpbmdcIj48aDE+e21vdmllLnRpdGxlfTwvaDE+PC9kaXY+XHJcbiAgICAgICAgPHA+e21vdmllLmRlc2N9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcbndpbmRvdy5Nb3ZpZUxpc3RFbnRyeSA9IE1vdmllTGlzdEVudHJ5O1xyXG4iXX0=