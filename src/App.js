import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Header from '../src/components/Header'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import Home from '../src/components/Home'
import Contact from '../src/components/Contact'
// import logo from './mine.png';
import './App.css';
// ALL ROUTING
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Projects from './components/Projects';
//three
import tnree from './js/three'






class App extends Component {
  render() {
    return (
      
  
      <BrowserRouter>
      <div className='App'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path ='/Projects' component={Projects} />
        <Route exact path ='/Contact' component={Contact} />
    
      
        <Footer />
        
      </div>
      </BrowserRouter>
      
      
     
    );
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));