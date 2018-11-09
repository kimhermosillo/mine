import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class Projects extends Component {
    render() {
        return (
            <div className='anywhere'>
                <div className="projects"><h4>Projects</h4></div>
                <Route exact path='/.Projects' component={Projects} />
                <p> Here is a link to my GitHub! This contains hundreds of repos worth of code, including my capstone project, and practice projects. </p>
                <h5>Shapes Mobile app</h5>
                <p>Mobile app built in 10 days! </p>
                <h5>CRāV</h5>
                <p></p>
            </div>
        )
    }
}

export default Projects