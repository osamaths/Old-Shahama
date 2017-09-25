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
              "Shahama"
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
                { href: "#" },
                "My Watchlist"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#" },
                "Page 2"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#" },
                "Page 3"
              )
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHVCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQztBQUFBO0FBQUE7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLFFBQWQ7QUFBdUI7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBdkIsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUosYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUosYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUo7QUFKRjtBQUpGO0FBREYsT0FERjtBQWVEOzs7O0VBcEJrQkMsTUFBTUMsUyIsImZpbGUiOiJOYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlciAoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlNoYWhhbWE8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk15IFdhdGNobGlzdDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5QYWdlIDI8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UGFnZSAzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==