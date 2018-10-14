'use strict';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: true, rules: [], ruleset: null };

    console.log("Getting list maybe", window.location);
    const rulesUrlRegEx = /\?ruleset=(.*)$/;
    console.log(rulesUrlRegEx.exec(window.location));
    const rulesUrl = rulesUrlRegEx.exec(window.location);
    if(rulesUrl) {
      this.state.list = false;
      this.getRuleset(rulesUrl[1]).then(
        (response) => {
          console.log(response.data)
          this.setState({ruleset: response.data});
        }
      );
    } else {
      this.getList().then(
        (response) => {
          console.log("DATA",response.data);
          // this.setState( {list:false});
          this.setState({rules: response.data});
          // this.forceUpdate();
        }
      );
    }
  }

  render() {
    if (this.state.list) {
      return (
        <div>
          <p>The coaster game isn't really a game yet. It doesn't come with any rules, just a few materials to get your brain going. So go ahead, punch out the tokens and invent your own game. Then, <a href="/rules/add">go here to publish your rules</a>. </p>
          <p>Or, check out the competition below:</p>
          <ul>  
            {this.state.rules.map((r, i) => <RulesListItem rules={r} key={i}></RulesListItem>)}
          </ul>
        </div>
      );
    }

    if(this.state.ruleset) {
      if(!this.state.ruleset.name) {
        this.state.ruleset.name = "Unknown";
      }
      const authorName = this.state.ruleset.website_approved ? <a href={this.state.ruleset.website}>{this.state.ruleset.name}</a> : <span> {this.state.ruleset.name} </span>;
      return (
        <div>
          <h2>{this.state.ruleset.game_name}</h2>
          <h3>By {authorName}</h3>
          <p>{this.state.ruleset.desc}</p>
          <ReactMarkdown source={this.state.ruleset.rules} />
        </div>
      );
    }

    return (
      <div>Loading...</div>
    );
  }

  getList(){
    return axios.get('/api/rules');
  }

  getRuleset(url){
    return axios.get('/api/rules/' + url);
  }
}