'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'onClick',
    value: function onClick(movie) {
      console.log(movie);
      $.ajax({
        url: 'http://127.0.0.1:3000/addToWatchList',
        type: 'POST',
        data: movie,
        dataType: 'json'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(NavBar, null),
        React.createElement(MovieList, { onClick: this.onClick.bind(this), moviesHolder: window.moviesHolder })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJtb3ZpZSIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiZGF0YVR5cGUiLCJvbkNsaWNrIiwiYmluZCIsIndpbmRvdyIsIm1vdmllc0hvbGRlciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxR0FDVkEsS0FEVTtBQUVsQjs7Ozs0QkFDUUMsSyxFQUFNO0FBQ2JDLGNBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBRyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxzQ0FEQTtBQUVMQyxjQUFNLE1BRkQ7QUFHTEMsY0FBTVAsS0FIRDtBQUlMUSxrQkFBVTtBQUpMLE9BQVA7QUFNRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxNQUFELE9BREY7QUFFRSw0QkFBQyxTQUFELElBQVcsU0FBVyxLQUFLQyxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBdEIsRUFBK0MsY0FBZ0JDLE9BQU9DLFlBQXRFO0FBRkYsT0FERjtBQU1EOzs7O0VBcEJlQyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgfVxyXG4gIG9uQ2xpY2sgKG1vdmllKXtcclxuICAgIGNvbnNvbGUubG9nKG1vdmllKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9hZGRUb1dhdGNoTGlzdCcsXHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgZGF0YTogbW92aWUsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIgKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICA8TW92aWVMaXN0IG9uQ2xpY2sgPSB7dGhpcy5vbkNsaWNrLmJpbmQodGhpcyl9IG1vdmllc0hvbGRlciA9IHt3aW5kb3cubW92aWVzSG9sZGVyfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19