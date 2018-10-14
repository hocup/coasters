'use strict';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: true };

    console.log("Getting list maybe");

    this.getList().then(
      (response) => {
        console.log(response.data);
        this.setState( {list:false});;
        // this.forceUpdate();
      }
    );
  }

  render() {
    if (this.state.list) {
      return 'List of links to rules';
    }

    return (
      <button onClick={() => this.setState({ list: true }) }>
        Like
      </button>
    );
  }

  getList(){
    return axios.get('/api/rules');
  }
}