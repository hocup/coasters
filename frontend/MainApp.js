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

    _this.state = { list: true, rules: [], ruleset: null };

    console.log("Getting list maybe", window.location);
    var rulesUrlRegEx = /\?ruleset=(.*)$/;
    console.log(rulesUrlRegEx.exec(window.location));
    var rulesUrl = rulesUrlRegEx.exec(window.location);
    if (rulesUrl) {
      _this.state.list = false;
      _this.getRuleset(rulesUrl[1]).then(function (response) {
        console.log(response.data);
        _this.setState({ ruleset: response.data });
      });
    } else {
      _this.getList().then(function (response) {
        console.log("DATA", response.data);
        // this.setState( {list:false});
        _this.setState({ rules: response.data });
        // this.forceUpdate();
      });
    }
    return _this;
  }

  _createClass(MainApp, [{
    key: "render",
    value: function render() {
      if (this.state.list) {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            "The coaster game isn't really a game yet. It doesn't come with any rules, just a few materials to get your brain going. So go ahead, punch out the tokens and invent your own game. Then, ",
            React.createElement(
              "a",
              { href: "/rules/add" },
              "go here to publish your rules"
            ),
            ". "
          ),
          React.createElement(
            "p",
            null,
            "Or, check out the competition below:"
          ),
          React.createElement(
            "ul",
            null,
            this.state.rules.map(function (r, i) {
              return React.createElement(RulesListItem, { rules: r, key: i });
            })
          )
        );
      }

      if (this.state.ruleset) {
        if (!this.state.ruleset.name) {
          this.state.ruleset.name = "Unknown";
        }
        var authorName = this.state.ruleset.website_approved ? React.createElement(
          "a",
          { href: this.state.ruleset.website },
          this.state.ruleset.name
        ) : React.createElement(
          "span",
          null,
          " ",
          this.state.ruleset.name,
          " "
        );
        return React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            null,
            this.state.ruleset.game_name
          ),
          React.createElement(
            "h3",
            null,
            "By ",
            authorName
          ),
          React.createElement(
            "p",
            null,
            this.state.ruleset.desc
          ),
          React.createElement(ReactMarkdown, { source: this.state.ruleset.rules })
        );
      }

      return React.createElement(
        "div",
        null,
        "Loading..."
      );
    }
  }, {
    key: "getList",
    value: function getList() {
      return axios.get('/api/rules');
    }
  }, {
    key: "getRuleset",
    value: function getRuleset(url) {
      return axios.get('/api/rules/' + url);
    }
  }]);

  return MainApp;
}(React.Component);