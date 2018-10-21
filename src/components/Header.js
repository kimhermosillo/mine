import React, {Component} from 'react'
import logo from '../mine.png'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default class Header extends React.Component {
   render() {
        return (
        <header className='AppMenu'>
          <h1>['mine']</h1>
       
          <NavLink exact to ='/'className='Menu-Home'>Home</NavLink>
          <NavLink exact to ='/About' component={About} className='Menu-About'>About</NavLink>
          <NavLink exact to ='/Projects' component={Projects} className='Menu-Projects'>Projects</NavLink>
          <NavLink exact to ='/Contact' component={Contact} className='Menu-Contact'>Contact</NavLink>
            

        </header>
   
        )
    }
}
