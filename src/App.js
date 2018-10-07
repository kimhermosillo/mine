import React, {Component} from 'react';
import Header from '../src/components/Header'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
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
        <Footer />
      </div>
    );
  }
}

export default App