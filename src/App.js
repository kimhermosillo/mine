import React, {Component} from 'react';
import Header from '../src/components/Header'
import logo from './mine.png';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          kimberly hermosillo // check back for updates
          <p>720/675/2974</p>
          <p><a className="App-link" href="mine@kimhermosillo.com">mine@kimhermosillo.com</a></p>

        </p>
      </div>
    );
  }
}

export default App