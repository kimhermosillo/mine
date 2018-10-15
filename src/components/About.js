import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class About extends Component {
    render() {
        return (
                <about>
                
                <Route exact path='/.About' component={About} />
                <p>life sucks and then u die do u see me </p>
            </about>
        )
    }
}

export default About