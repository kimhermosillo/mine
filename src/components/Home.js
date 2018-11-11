import React, {Component} from 'react'
import { Route } from 'react-router-dom'
// import 'materialize-css/dist/css/materialize.min.css'

class Home extends Component {
    render() {
        return (
            <div class='anywhere'>
              <p> Kimberly Hermosillo
                <Route exact path='/Home' component={Home} />
                [anywhere but here] 📍HOUSTON </p>
            </div>
        )
    }
}

export default Home