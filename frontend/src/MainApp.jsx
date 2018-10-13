'use strict';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: true };
  }

  render() {
    if (this.state.list) {
      return 'List of links to rules';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}