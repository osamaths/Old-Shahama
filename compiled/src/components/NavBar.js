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
                { href: "#" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHVCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQztBQUFxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJDO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFJLFdBQVUsZ0JBQWQ7QUFDRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxRQUFkO0FBQXVCO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQXZCLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFKO0FBRkYsV0FKRjtBQVFFO0FBQUE7QUFBQSxjQUFJLFdBQVUsNkJBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxHQUFSO0FBQVksOENBQU0sV0FBVSwwQkFBaEIsR0FBWjtBQUFBO0FBQUE7QUFBSixhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFZLDhDQUFNLFdBQVUsNEJBQWhCLEdBQVo7QUFBQTtBQUFBO0FBQUo7QUFGRjtBQVJGO0FBREYsT0FERjtBQWlCRDs7OztFQXRCa0JDLE1BQU1DLFMiLCJmaWxlIjoiTmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIgKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItaW52ZXJzZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj48Yj5TaGFoYW1hPC9iPjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TXkgV2F0Y2hsaXN0PC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcIj48L3NwYW4+IFNpZ24gVXA8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW5cIj48L3NwYW4+IExvZ2luPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==