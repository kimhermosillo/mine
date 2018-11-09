import React, {Component} from 'react';
import Header from '../src/components/Header'
import logo from './mine.png';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'


const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' Component{Landing} />
        </div>





      </BrowserRouter>  
    </div>
  )
}

export default App