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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwibW92aWUiLCJjb25zb2xlIiwibG9nIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImRhdGFUeXBlIiwib25DbGljayIsImJpbmQiLCJ3aW5kb3ciLCJtb3ZpZXNIb2xkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1ZBLEtBRFU7QUFFbEI7Ozs7NEJBQ1FDLEssRUFBTTtBQUNiQyxjQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQUcsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssc0NBREE7QUFFTEMsY0FBTSxNQUZEO0FBR0xDLGNBQU1QLEtBSEQ7QUFJTFEsa0JBQVU7QUFKTCxPQUFQO0FBTUQ7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxPQURGO0FBRUUsNEJBQUMsU0FBRCxJQUFXLFNBQVcsS0FBS0MsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQXRCLEVBQStDLGNBQWdCQyxPQUFPQyxZQUF0RTtBQUZGLE9BREY7QUFNRDs7OztFQXBCZUMsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gIH1cclxuICBvbkNsaWNrIChtb3ZpZSl7XHJcbiAgICBjb25zb2xlLmxvZyhtb3ZpZSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvYWRkVG9XYXRjaExpc3QnLFxyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IG1vdmllLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyICgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgPE1vdmllTGlzdCBvbkNsaWNrID0ge3RoaXMub25DbGljay5iaW5kKHRoaXMpfSBtb3ZpZXNIb2xkZXIgPSB7d2luZG93Lm1vdmllc0hvbGRlcn0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==