import React, { Component } from 'react';

class App extends Component {

  state = {
    basic: "Unfinished",
    query: "Unfinished",
    param: "Unfinished",
  }

  componentDidMount(){
    // ----- MAKE AXIOS CALLS BELOW ----- \\
    
    // ----- MAKE AXIOS CALLS ABOVE ----- \\
  }

  checkSolution = () => {
    console.log("BASIC: " , this.state.basic);
    console.log("QUERY: " , this.state.query);
    console.log("PARAM: " , this.state.param);
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>OPEN THE CONSOLE</h1>
        <button onClick={this.checkSolution}>Check Solution</button>
        <p>{this.state.body}</p>

      </div>
    );
  }
}

export default App;
