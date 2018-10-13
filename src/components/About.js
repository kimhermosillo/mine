import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div>
                <div className="about">About</div>
                {/* <Route exact path='/.About' component={About} /> */}
                <p>life sucks and then u die </p>
            </div>
        )
    }
}

export default About