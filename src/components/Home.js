import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className='divhome'>
               <p> Kimberly Hermosillo
                <Route exact path='/Home' component={Home} />
                [anywhere but here] 📍oaxaca </p>
            </div>
        )
    }
}

export default Home