import React, { Component } from 'react';
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
import 'materialize-css/dist/css/materialize.min.css'
// LINKS
import LinkAbout from '../src/components/LinkAbout'
import LinkHome from '../src/components/LinkHome'
import LinkProject from '../src/components/LinkProject'






class App extends Component {
  render() {







    return (


      <div>
        <BrowserRouter>
          <Header />

              <Links />

              <LinkHome />
              <LinkAbout />
              <LinkProject />
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Projects' component={Projects} />


              <Footer />

            </div>
        </BrowserRouter> 
      </div>
        );
      }
    }
    
    export default App
ReactDOM.render(<App />, document.getElementById('root'));