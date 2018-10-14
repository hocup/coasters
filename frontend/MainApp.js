'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainApp = function (_React$Component) {
  _inherits(MainApp, _React$Component);

  function MainApp(props) {
    _classCallCheck(this, MainApp);

    var _this = _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).call(this, props));

    _this.state = { list: true };

    console.log("Getting list maybe");

    _this.getList().then(function (response) {
      console.log(response.data);
      _this.setState({ list: false });;
      // this.forceUpdate();
    });
    return _this;
  }

  _createClass(MainApp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.list) {
        return 'List of links to rules';
      }

      return React.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.setState({ list: true });
          } },
        'Like'
      );
    }
  }, {
    key: 'getList',
    value: function getList() {
      return axios.get('/api/rules');
    }
  }]);

  return MainApp;
}(React.Component);