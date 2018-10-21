import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="Contact">Contact</div>
                <Route exact path='/.Contact' component={Contact} />
                <p> ALL MY INFO </p>
            </div>
        )
    }
}

export default Contact