import React, {Component} from 'react'
import logo from '../mine.png'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects';

export default class Header extends React.Component {
   render() {
        return (
        <header className='App-header'>
        <h1 className='App-title'>['mine']</h1>
        <div className='Links'>
          <NavLink exact to ='/'className='App-link'>Home</NavLink>
          <NavLink exact to ='/About' component={About} className='App-link'>About</NavLink>
          <NavLink exact to ='/Projects' component={Projects} className='App-link'>Projects</NavLink>
       </div>

        </header>
        
        )
    }
}
