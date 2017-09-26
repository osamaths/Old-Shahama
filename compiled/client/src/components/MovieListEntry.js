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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Nb3ZpZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJtb3ZpZSIsIm9uQ2xpY2siLCJpbWdVUkwiLCJ0aXRsZSIsImRlc2MiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLE1BQVNDLFFBQVQsUUFBU0EsT0FBVDtBQUFBLFNBQ25CO0FBQUE7QUFBQSxNQUFLLElBQUcsZUFBUixFQUF3QixXQUFVLEtBQWxDO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx1REFBZjtBQUNFLG1DQUFLLFdBQVksT0FBakIsR0FERjtBQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVksWUFBakI7QUFDRSxxQ0FBSyxXQUFZLGNBQWpCLEVBQWdDLEtBQU9ELE1BQU1FLE1BQTdDLEVBQXFELE9BQVEsT0FBN0QsRUFBcUUsU0FBVyxtQkFBTTtBQUFDRCxxQkFBUUQsS0FBUjtBQUFlLFdBQXRHO0FBREYsT0FGRjtBQUtFO0FBQUE7QUFBQSxVQUFLLFdBQVksWUFBakI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFZLGVBQWpCO0FBQWlDO0FBQUE7QUFBQTtBQUFLQSxrQkFBTUc7QUFBWDtBQUFqQyxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUlILGdCQUFNSTtBQUFWO0FBRkY7QUFMRjtBQURGLEdBRG1CO0FBQUEsQ0FBckI7QUFjQUMsT0FBT04sY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVMaXN0RW50cnkgPSAoe21vdmllLCBvbkNsaWNrfSkgPT4gKFxyXG4gIDxkaXYgaWQ9J21haW5Db250YWluZXInIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsIHdlbGwtZnVpbGQgY29sLWxnLTggY29sLW1kLTYgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibWVkaWFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm1lZGlhLWxlZnRcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZSA9IFwibWVkaWEtb2JqZWN0XCIgc3JjID0ge21vdmllLmltZ1VSTH0gd2lkdGggPSBcIjIwMHB4XCIgb25DbGljayA9IHsoKSA9PiB7b25DbGljayhtb3ZpZSl9fS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtZWRpYS1oZWFkaW5nXCI+PGgxPnttb3ZpZS50aXRsZX08L2gxPjwvZGl2PlxyXG4gICAgICAgIDxwPnttb3ZpZS5kZXNjfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG53aW5kb3cuTW92aWVMaXN0RW50cnkgPSBNb3ZpZUxpc3RFbnRyeTtcclxuIl19