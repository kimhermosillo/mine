import React, {Component} from 'react'
import logo from '../mine.png'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects';

export default class LinkProject extends React.Component {
   render() {
        return (
        <div>
        

        
          
          <NavLink exact to ='/Projects' component={Projects} className='App-link2'>Projects</NavLink>
          
       
      </div>
        )
    }
}
