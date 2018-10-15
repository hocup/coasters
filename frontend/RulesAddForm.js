'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RulesAddForm = function (_React$Component) {
    _inherits(RulesAddForm, _React$Component);

    function RulesAddForm(props) {
        _classCallCheck(this, RulesAddForm);

        var _this = _possibleConstructorReturn(this, (RulesAddForm.__proto__ || Object.getPrototypeOf(RulesAddForm)).call(this, props));

        _this.state = { rulesMd: "# Main rules go here\nFormatting handled through markdown, so go wild!" };
        return _this;
    }

    _createClass(RulesAddForm, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Invent Some Rules Please"
                ),
                React.createElement(
                    "p",
                    null,
                    "Oh No! This game doesn't have any rules!"
                ),
                React.createElement(
                    "p",
                    null,
                    "Paper prototyping is a fun and efficient way to try out a game design. This set of coasters is there to help. Think of ways to turn them into a game and then use the form below to publish your rules!"
                ),
                React.createElement(
                    "p",
                    null,
                    "All fields other than your email will be public. The email is gathered on the off chance I add the ability to edit your published rule sets. Consider using ",
                    React.createElement(
                        "a",
                        { href: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" },
                        "markdown"
                    ),
                    " in the main rules area for better formatting."
                ),
                React.createElement(
                    "p",
                    null,
                    "Some ideas I haven't thought through:"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Group up with someone else with a set of coasters, for more play area and more tokens"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Trace the edges of the coasters onto paper, for an even bigger play area"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Use the punchable tokens instead of dice by flipping the numbered ones upside down and picking one at random"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Use the coasters to hold the drinks involved in your idea of what Brett Kavanaugh's original drinking game \"The Devils Triangle\" might be like"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Draw on the play area coasters! Flip the tokens over and draw on those too!"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Flick the tokens across the table for a neat kinetic game"
                    )
                ),
                React.createElement(
                    "form",
                    { method: "post", action: "/api/rules" },
                    React.createElement(
                        "label",
                        { "html-for": "name" },
                        "Your Name: "
                    ),
                    React.createElement("input", { type: "text", name: "name" }),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        { "html-for": "email" },
                        "Your Email: "
                    ),
                    React.createElement("input", { type: "text", name: "email" }),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        { "html-for": "website" },
                        "Your Website: "
                    ),
                    React.createElement("input", { type: "text", name: "website" }),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        { "html-for": "game_name" },
                        "*The Game's Name: "
                    ),
                    React.createElement("input", { type: "text", name: "game_name", required: true }),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        { "html-for": "desc" },
                        "Game Description: "
                    ),
                    React.createElement("input", { type: "text", name: "desc" }),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        { "html-for": "rules" },
                        "*The Game's Rules: "
                    ),
                    React.createElement("textarea", { name: "rules", required: true, value: this.state.rulesMd, onChange: function onChange(evt) {
                            return _this2.updateRulesText(evt);
                        } }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "submit", value: "Publish Rules" })
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Rules Preview:"
                    ),
                    React.createElement(
                        "div",
                        { "class": "ba b--dashed" },
                        React.createElement(ReactMarkdown, { source: this.state.rulesMd })
                    )
                )
            );
        }
    }, {
        key: "updateRulesText",
        value: function updateRulesText(event) {
            this.setState({ rulesMd: event.target.value });
        }
    }]);

    return RulesAddForm;
}(React.Component);

;