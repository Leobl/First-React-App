import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>That's really working!</p>
        <Person />
      </div>
    );

    // The following is compiled when the above JS code is run.
    // It is not used a lot because it gets complicated more and more as we nest classess.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App renderred with createElement function!'));
  }
}

export default App;
