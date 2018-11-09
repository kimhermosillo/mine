import React, {Component} from 'react'
import logo from '../mine.png'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects';
import Home from './Home'

export default class LinkHome extends React.Component {
   render() {
        return (
        <div>
        

        
          
          <NavLink exact to ='/' component={Home} className='LinkHome'>Home</NavLink>
          
       
      </div>
        )
    }
}
