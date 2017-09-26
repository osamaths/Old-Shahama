"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "navbar navbar-inverse" },
        React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "div",
            { className: "navbar-header" },
            React.createElement(
              "a",
              { className: "navbar-brand", href: "#" },
              React.createElement(
                "b",
                null,
                "Shahama"
              )
            )
          ),
          React.createElement(
            "ul",
            { className: "nav navbar-nav" },
            React.createElement(
              "li",
              { className: "active" },
              React.createElement(
                "a",
                { href: "#" },
                "Home"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "http://localhost:3000/mywatchlist" },
                "My Watchlist"
              )
            )
          ),
          React.createElement(
            "ul",
            { className: "nav navbar-nav navbar-right" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#" },
                React.createElement("span", { className: "glyphicon glyphicon-user" }),
                " Sign Up"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#" },
                React.createElement("span", { className: "glyphicon glyphicon-log-in" }),
                " Login"
              )
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4Il0sIm5hbWVzIjpbIk5hdkJhciIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxjQUFiLEVBQTRCLE1BQUssR0FBakM7QUFBcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQztBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSSxXQUFVLGdCQUFkO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsUUFBZDtBQUF1QjtBQUFBO0FBQUEsa0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUF2QixhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFHLE1BQUssbUNBQVI7QUFBQTtBQUFBO0FBQUo7QUFGRixXQUpGO0FBUUU7QUFBQTtBQUFBLGNBQUksV0FBVSw2QkFBZDtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBWSw4Q0FBTSxXQUFVLDBCQUFoQixHQUFaO0FBQUE7QUFBQTtBQUFKLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxHQUFSO0FBQVksOENBQU0sV0FBVSw0QkFBaEIsR0FBWjtBQUFBO0FBQUE7QUFBSjtBQUZGO0FBUkY7QUFERixPQURGO0FBaUJEOzs7O0VBdEJrQkMsTUFBTUMsUyIsImZpbGUiOiJOYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlciAoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPjxiPlNoYWhhbWE8L2I+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9teXdhdGNobGlzdFwiPk15IFdhdGNobGlzdDwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPiBTaWduIFVwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLWluXCI+PC9zcGFuPiBMb2dpbjwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=