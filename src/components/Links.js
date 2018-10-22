import React, {Component} from 'react'
import logo from '../mine.png'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects';

export default class Links extends React.Component {
   render() {
        return (
        <div>
        

        
          <NavLink exact to ='/'className='App-link1'></NavLink>
          <NavLink exact to ='/About' component={About} className='App-link2'></NavLink>
          <NavLink exact to ='/Projects' component={Projects} className='App-link3'></NavLink>
   

       
      </div>
        )
    }
}
