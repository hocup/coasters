'use strict';

class RulesAddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (<div>
          <h1>Invent Some Rules Please</h1>
          <p>Oh No! This game doesn't have any rules!</p>
          <p>
              Paper prototyping is a fun and efficient way to try out a game design. This set of coasters is there to help. Think of ways to turn them into a game and then use the form below to publish your rules!
          </p>
          <p>
              All fields other than your email will be public. The email is gathered on the off chance I add the ability to edit your published rule sets. Consider using <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">markdown</a> in the main rules area for better formatting.
          </p>
          <p>
              Some ideas I haven't thought through:
              <ul>
                  <li>Make a wargame!</li>
                  <li>Group up with someone else with a set of coasters, for more play area and more tokens</li>
                  <li>Trace the edges of the coasters onto paper, for an even bigger play area</li>
                  <li>Use the punchable tokens instead of dice by flipping the numbered ones upside down and picking one at random</li> 
                  <li>Use the coasters to hold the drinks involved in your version of Brett Kavanaugh's original game "The Devils Triangle"</li>
                  <li>Draw on the play area coasters! Flip the tokens over and draw on those too!</li>
              </ul>
          </p>

        <form method="post" action="/api/rules">
            <label html-for="name">Your Name: </label><input type="text" name="name"></input>
            <br/>
            <label html-for="email">Your Email: </label><input type="text" name="email"></input>
            <br/>
            <label html-for="website">Your Website: </label><input type="text" name="website"></input>
            <br/>
            <label html-for="game_name">*The Game's Name: </label><input type="text" name="game_name" required></input>
            <br/>
            <label html-for="desc">Game Description: </label><input type="text" name="desc"></input>
            <br/>
            <label html-for="rules">*The Game's Rules: </label><textarea name="rules" required></textarea>
            <br/>
            <input type="submit" value="Publish Rules"></input>
        </form>
      </div>)
  };
};