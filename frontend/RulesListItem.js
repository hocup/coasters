'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RulesListItem = function (_React$Component) {
  _inherits(RulesListItem, _React$Component);

  function RulesListItem(props) {
    _classCallCheck(this, RulesListItem);

    var _this = _possibleConstructorReturn(this, (RulesListItem.__proto__ || Object.getPrototypeOf(RulesListItem)).call(this, props));

    console.log(props);
    if (props.rules) {
      _this.state = { game: props.rules };
      _this.gameName = props.rules.game_name;
    }
    return _this;
  }

  _createClass(RulesListItem, [{
    key: "render",
    value: function render() {
      var authorName = this.state.game.website_approved ? React.createElement(
        "a",
        { href: this.state.game.website },
        this.state.game.name
      ) : React.createElement(
        "span",
        null,
        " ",
        this.state.game.name,
        " "
      );
      var gameUrl = "/rules/?ruleset=" + this.state.game.url;

      return React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: gameUrl },
          this.state.game.game_name
        ),
        " by ",
        authorName,
        React.createElement("br", null),
        React.createElement(
          "span",
          null,
          this.state.game.desc
        )
      );
    }
  }]);

  return RulesListItem;
}(React.Component);