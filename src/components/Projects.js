import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class Projects extends Component {
    render() {
        return (
            <div className='anywhere'>
                <div className="projects">Projects</div>
                <Route exact path='/.Projects' component={Projects} />
                <p> Link to my github! </p>
            </div>
        )
    }
}

export default Projects