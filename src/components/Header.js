import React, {Component} from 'react'
import logo from '../mine.png'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects';

export default class Header extends React.Component {
   render() {
        return (
        <header>
          <h1>['mine']</h1>
        </header>
        )
    }
}
