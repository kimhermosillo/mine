import React, {Component} from 'react'
import logo from '../mine.png'


export default class Header extends React.Component {
   render() {
        return (
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">['mine']</h1>
        </header>
        )
    }
}