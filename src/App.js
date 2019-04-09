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
  }

  checkSolution = () => {
    console.log("ALL: " , this.state.all);
    console.log("QUERY: " , this.state.query);
    console.log("PARAM: " , this.state.param);
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>OPEN THE CONSOLE</h1>
        <button onClick={this.checkSolution}>Check Solution</button>

      </div>
    );
  }
}

export default App;
