import React, {Component} from 'react'
import logo from '../mine.png'
import { NavLink } from 'react-router-dom'


export default class Header extends React.Component {
   render() {
        return (
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">['mine']</h1>
          <NavLink exact to ="./About" className='App-link'>About</NavLink>
        </header>
        
        )
    }
}