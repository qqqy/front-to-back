import React, { Component } from 'react';

class App extends Component {

  state = {
    all: "Unfinished",
    query: "Unfinished",
    param: "Unfinished"
  }

  componentDidMount(){
    //CODE HERE//

    //END CODE//
    console.log("ALL: " , this.state.all)
    console.log("QUERY: " , this.state.query)
    console.log("PARAM: " , this.state.param)
  }
  render() {
    return (
      <div className="App">
        <h1>OPEN THE CONSOLE</h1>
      </div>
    );
  }
}

export default App;
