import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="Home">Kimberly Hermosillo</div>
                <Route exact path='/Home' component={Home} />
          <p> [anywhere but here] 📍oaxaca </p>
            </div>
        )
    }
}

export default Home