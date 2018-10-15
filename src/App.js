import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Header from '../src/components/Header'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import Home from '../src/components/Home'
// import logo from './mine.png';
import './App.css';
// ALL ROUTING
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// END OF ROUTING
import Projects from './components/Projects';
import particles from './particles'
// PARALLAX 
import { Parallax, Background } from 'react-parallax'






class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Parallax 
       blur={10}
       bgImage={require('./mine.png')}
       bgImageAlt="the cat"
       strength={500}
   >
      <div className='App'>
        <Header />
        <p className='App-intro'>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path ='/Projects' component={Projects} />
        </p>
        <Footer />
      </div>
      <div style={{ height: '200px' }} />
        </Parallax>
      </BrowserRouter>
    );
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));
