import React, {Component} from 'react'
import logo from '../mine.png'
// import App from '../App'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './About'

export default class Header extends React.Component {
   render() {
        return (
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">['mine']</h1>
          <div className='nav'>
          <NavLink exact to ='/'>Home</NavLink>
          <NavLink exact to ="/About" className='App-link' component={About}>About</NavLink>
        </div>
        <div className='content'>
        {/* <Route exact path='/' component={App} /> */}
        {/* <Route exact path='/About' component={About} /> */}
        </div>
        </header>
        
        )
    }
}
