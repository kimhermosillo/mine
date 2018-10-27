import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Header from '../src/components/Header'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import Home from '../src/components/Home'
import Links from '../src/components/Links'
// import logo from './mine.png';
import './App.css';
// ALL ROUTING
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Projects from './components/Projects';
//ADDING PARALLAX
import { Parallax, Background } from 'react-parallax'
// LINKS
import LinkAbout from '../src/components/LinkAbout'
import LinkHome from '../src/components/LinkHome'
import LinkProject from '../src/components/LinkProject'
// SICKO MODE\






class App extends Component {
  render() {
    return (
      
      
      <BrowserRouter>
      <div className='container'>
        <div className='header'><Header /></div>
        <Links />
        <div className='home'><LinkHome /></div>
        <div className='about'><LinkAbout /></div>
        <div className='project'><LinkProject /></div>
        {/* <p className='App-intro'> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path ='/Projects' component={Projects} />
        {/* </p> */}
        
        <div className='footer'><Footer /></div>
        
      </div>
      </BrowserRouter>
    
      
     
    );
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));