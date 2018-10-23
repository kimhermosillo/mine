import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                Kimberly Hermosillo
                <Route exact path='/Home' component={Home} />
                [anywhere but here] 📍oaxaca 
            </div>
        )
    }
}

export default Home