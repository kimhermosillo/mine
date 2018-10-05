import React, {Component} from 'react';
import logo from './mine.png';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">['mine']</h1>
        </header>
        <p className="App-intro">
          kimberly hermosillo // check back for updates
          <p>720/675/2974</p>
          <p><a href="mine@kimhermosillo.com">mine@kimhermosillo.com</a></p>

        </p>
      </div>
    );
  }
}

export default App