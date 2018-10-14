'use strict';

class RulesListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    if(props.rules) {
        this.state = {game: props.rules};
        this.gameName = props.rules.game_name;
    }
  }

  render() {
    const authorName = this.state.game.website_approved ? <a href={this.state.game.website}>{this.state.game.name}</a> : <span> {this.state.game.name} </span>;
    const gameUrl = "/rules/?ruleset=" + this.state.game.url;

    return (
        <li>
            <a href={gameUrl} >{this.state.game.game_name}</a> by {authorName}
            <br/>
            <span>{this.state.game.desc}</span>
        </li>
    );
  }
}